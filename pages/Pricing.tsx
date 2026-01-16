import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { TRANSLATIONS, PRICING_TIERS } from '../constants';
import { Language } from '../types';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {t.pricing.title}
            </h1>
            <p className="text-gray-500 text-lg">Des offres claires, sans coûts cachés.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {PRICING_TIERS.map((tier, index) => (
                <div 
                    key={index} 
                    className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                        tier.popular 
                        ? 'bg-slate-900 text-white shadow-2xl scale-110 z-10 border border-indigo-500/50' 
                        : 'bg-white border border-gray-100 text-slate-900 shadow-xl hover:-translate-y-2'
                    }`}
                >
                    {tier.popular && (
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-accent rounded-t-3xl"></div>
                    )}
                    {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
                            Most Popular
                        </div>
                    )}
                    
                    <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-gray-100' : 'text-gray-600'}`}>{tier.name}</h3>
                    <div className="mb-8">
                         <span className={`text-4xl font-bold ${tier.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300' : 'text-slate-900'}`}>{tier.price}</span>
                    </div>
                    
                    <ul className="flex-grow space-y-5 mb-10">
                        {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className={`p-1 rounded-full ${tier.popular ? 'bg-white/10 text-brand-accent' : 'bg-indigo-50 text-brand-primary'}`}>
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium opacity-90">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Link 
                        to="/contact"
                        className={`w-full py-4 rounded-xl font-bold text-center transition-all shadow-lg ${
                            tier.popular 
                            ? 'bg-gradient-accent text-white hover:brightness-110 hover:shadow-amber-500/40' 
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-brand-primary'
                        }`}
                    >
                        {tier.cta}
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;