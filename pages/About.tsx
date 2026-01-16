import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { CheckCircle } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">{t.aboutPage.title}</span>
            </h1>
            
            <div className="mb-16 relative group">
                <img src="https://picsum.photos/1200/600?grayscale" alt="Office Vibe" className="w-full rounded-3xl shadow-2xl transition-all duration-700 group-hover:grayscale-0 transform group-hover:scale-[1.01]" />
                <div className="absolute -bottom-10 right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-md border-l-4 border-brand-accent">
                    <p className="text-2xl font-bold font-serif text-slate-900 italic leading-relaxed">"L'IA est un outil, <br/>la <span className="text-gradient-accent">créativité</span> est humaine."</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mt-32">
                <div className="md:col-span-1">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
                        <img src="https://picsum.photos/400/500?random=50" alt="Mouenzime Salami" className="relative w-full rounded-2xl shadow-lg mb-6 object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Mouenzime Salami</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-primary font-bold text-lg mt-1">Founder & Creative Director</p>
                </div>
                <div className="md:col-span-2 space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                    <p className="text-3xl font-serif font-bold text-slate-900 leading-tight">
                        {t.aboutPage.intro}
                    </p>
                    <p>
                        {t.aboutPage.story}
                    </p>
                    <div className="p-8 bg-indigo-50 rounded-2xl border-l-4 border-brand-primary my-8">
                        <p className="font-medium text-indigo-900 text-xl italic">
                            {t.aboutPage.mission}
                        </p>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 pt-4">{t.aboutPage.valuesTitle}</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {t.aboutPage.values.map((value, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                                <CheckCircle className="text-brand-accent" size={24} />
                                <span className="font-bold text-slate-800">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;