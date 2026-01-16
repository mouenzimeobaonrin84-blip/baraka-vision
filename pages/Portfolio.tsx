import React, { useState } from 'react';
import { TRANSLATIONS, PORTFOLIO_ITEMS } from '../constants';
import { Language } from '../types';

interface PortfolioProps {
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'copywriting' | 'photo' | 'video'>('all');
  const t = TRANSLATIONS[lang];

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-brand-dark text-white py-24 relative overflow-hidden">
         {/* Abstract Gradient Background */}
         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-900/30 to-slate-900 z-0"></div>
         
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">{t.nav.portfolio}</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">{t.portfolio.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
                onClick={() => setFilter('all')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
                    filter === 'all' 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-slate-300'
                }`}
            >
                {t.portfolio.filterAll}
            </button>
            <button 
                onClick={() => setFilter('copywriting')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
                    filter === 'copywriting' 
                    ? 'bg-gradient-primary text-white shadow-lg shadow-indigo-500/30' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300'
                }`}
            >
                Copywriting
            </button>
             <button 
                onClick={() => setFilter('photo')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
                    filter === 'photo' 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-pink-300'
                }`}
            >
                Photo IA
            </button>
             <button 
                onClick={() => setFilter('video')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
                    filter === 'video' 
                    ? 'bg-gradient-accent text-white shadow-lg shadow-amber-500/30' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-amber-300'
                }`}
            >
                Video IA
            </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
                <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-slate-900">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className={`text-xs font-bold uppercase tracking-wider mb-2 inline-block px-2 py-1 rounded bg-white/20 backdrop-blur-md w-fit
                            ${item.category === 'photo' ? 'text-pink-300' : 
                              item.category === 'video' ? 'text-amber-300' : 'text-indigo-300'}
                        `}>{item.category}</span>
                        <h3 className="text-white text-2xl font-serif font-bold">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>

        {/* Construction Notice */}
        <div className="mt-24 p-12 bg-gradient-to-br from-gray-50 to-indigo-50 border border-indigo-100 rounded-3xl text-center shadow-inner">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
                <span className="text-3xl">🚀</span> {t.portfolio.construction}
            </h3>
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-gradient-primary transition-all shadow-lg hover:shadow-indigo-500/30">
                {t.portfolio.cta}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;