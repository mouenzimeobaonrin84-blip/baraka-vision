import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { PenTool, Image, Film, Check } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
         {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.nav.services}</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-lg">{t.hero.intro}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* Copywriting */}
        <div className="grid md:grid-cols-2 gap-12 items-center group">
            <div className="order-2 md:order-1">
                <div className="inline-flex p-4 bg-gradient-primary text-white rounded-2xl mb-6 shadow-lg shadow-indigo-500/30 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <PenTool size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.servicesPage.copywriting.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{t.servicesPage.copywriting.desc}</p>
                <ul className="space-y-3 mb-8 text-gray-700">
                    {t.servicesPage.copywriting.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-3">
                             <span className="p-1 bg-indigo-100 rounded-full text-brand-primary"><Check size={14} /></span>
                             {feature}
                         </li>
                    ))}
                </ul>
                <div className="p-4 bg-indigo-50 border-l-4 border-brand-primary mb-8 rounded-r-lg">
                    <p className="text-brand-primary font-semibold">{t.servicesPage.copywriting.result}</p>
                </div>
                <Link to="/pricing" className="px-8 py-3 bg-gradient-to-r from-brand-dark to-slate-800 text-white rounded-lg font-semibold hover:from-brand-primary hover:to-brand-secondary transition-all shadow-lg hover:shadow-indigo-500/25">
                    Voir les packs
                </Link>
            </div>
            <div className="order-1 md:order-2">
                <img src="https://picsum.photos/600/400?random=20" className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500" alt="Copywriting Office" />
            </div>
        </div>

        {/* Photo IA */}
        <div className="grid md:grid-cols-2 gap-12 items-center group">
             <div className="md:order-1">
                <img src="https://picsum.photos/600/400?random=21" className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500" alt="AI Generated Portrait" />
            </div>
            <div className="md:order-2">
                <div className="inline-flex p-4 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl mb-6 shadow-lg shadow-pink-500/30 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <Image size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.servicesPage.photo.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{t.servicesPage.photo.desc}</p>
                 <ul className="space-y-3 mb-8 text-gray-700">
                    {t.servicesPage.photo.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-3">
                             <span className="p-1 bg-pink-100 rounded-full text-pink-600"><Check size={14} /></span>
                             {feature}
                         </li>
                    ))}
                </ul>
                <div className="p-4 bg-pink-50 border-l-4 border-pink-600 mb-8 rounded-r-lg">
                    <p className="text-pink-600 font-semibold">{t.servicesPage.photo.result}</p>
                </div>
                <Link to="/pricing" className="px-8 py-3 bg-gradient-to-r from-brand-dark to-slate-800 text-white rounded-lg font-semibold hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg hover:shadow-pink-500/25">
                    Voir les packs
                </Link>
            </div>
        </div>

        {/* Video IA */}
        <div className="grid md:grid-cols-2 gap-12 items-center group">
            <div className="order-2 md:order-1">
                <div className="inline-flex p-4 bg-gradient-accent text-white rounded-2xl mb-6 shadow-lg shadow-amber-500/30 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <Film size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.servicesPage.video.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{t.servicesPage.video.desc}</p>
                 <ul className="space-y-3 mb-8 text-gray-700">
                    {t.servicesPage.video.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-3">
                             <span className="p-1 bg-amber-100 rounded-full text-amber-600"><Check size={14} /></span>
                             {feature}
                         </li>
                    ))}
                </ul>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-600 mb-8 rounded-r-lg">
                    <p className="text-amber-600 font-semibold">{t.servicesPage.video.result}</p>
                </div>
                <Link to="/pricing" className="px-8 py-3 bg-gradient-to-r from-brand-dark to-slate-800 text-white rounded-lg font-semibold hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-amber-500/25">
                     Voir les packs
                </Link>
            </div>
            <div className="order-1 md:order-2">
                <img src="https://picsum.photos/600/400?random=22" className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500" alt="Video Editing" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;