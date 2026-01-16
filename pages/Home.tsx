import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Camera, Video, CheckCircle, Zap, Target, TrendingUp, Users } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="animate-in fade-in duration-700 overflow-x-hidden">
      {/* Hero Section with Spline 3D */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-brand-dark">
        {/* 3D Scene Background */}
        <div className="absolute inset-0 z-0 opacity-80">
            {/* Using a public abstract spline scene suitable for modern/tech vibe */}
            <Spline scene="https://prod.spline.design/M2-50l-6h5J-9Xd4/scene.splinecode" />
        </div>
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {t.hero.title.split('–')[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-pink-500">
                {t.hero.title.split('–')[1] || "Donnez du pouvoir"}
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-200 mb-6 font-sans">
              {t.hero.subtitle}
            </p>
            <div className="glass-dark p-6 rounded-2xl mb-10 border-l-4 border-brand-accent backdrop-blur-md">
                <p className="text-gray-300 text-lg leading-relaxed">
                {t.hero.intro}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-primary text-white rounded-full font-bold shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group"
              >
                {t.hero.ctaPrimary} <Zap className="group-hover:text-yellow-300 transition-colors" size={20} />
              </Link>
              <Link 
                to="/portfolio" 
                className="px-8 py-4 glass text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                {t.hero.ctaSecondary} <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right side is open for the 3D element visibility, but we can add a floating badge */}
          <div className="hidden md:flex justify-end relative pointer-events-none">
             <div className="glass-dark p-4 rounded-xl shadow-2xl animate-bounce duration-[3000ms] absolute top-10 right-10 border border-white/10">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white font-mono text-sm">IA Generation Active</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Express - Glassmorphism Cards */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-dark to-transparent opacity-10"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">{t.services.title}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-indigo-50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-indigo-500/30">
                <PenTool size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t.services.copywriting.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.services.copywriting.desc}</p>
              <Link to="/services" className="text-brand-primary font-bold flex items-center group-hover:gap-3 transition-all">
                {t.services.more} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-pink-50 shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-pink-500/30">
                <Camera size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t.services.photo.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.services.photo.desc}</p>
              <Link to="/services" className="text-pink-600 font-bold flex items-center group-hover:gap-3 transition-all">
                {t.services.more} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-amber-50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-amber-500/30">
                <Video size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t.services.video.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.services.video.desc}</p>
              <Link to="/services" className="text-amber-600 font-bold flex items-center group-hover:gap-3 transition-all">
                {t.services.more} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                {t.targets.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300">l'excellence.</span>
              </h2>
              <p className="text-gray-300 mb-10 text-lg">Nous adaptons le ton et l'esthétique à votre industrie spécifique pour maximiser l'impact.</p>
              <Link to="/portfolio" className="inline-block px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold">
                Voir les exemples
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {t.targets.items.map((item, idx) => (
                <div key={idx} className="glass-dark p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                    <CheckCircle className="text-green-400 group-hover:text-white" size={24} />
                  </div>
                  <span className="font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16 text-slate-900">
                {t.portfolio.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[500px]">
                <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-2xl">
                    <img src="https://picsum.photos/800/800?random=10" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Portfolio" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2">Real Estate</span>
                        <span className="text-white font-serif font-bold text-3xl">Immobilier Prestige</span>
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden relative group shadow-lg">
                    <img src="https://picsum.photos/400/400?random=11" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Portfolio" />
                     <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <Camera className="text-white" size={32} />
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden relative group shadow-lg">
                    <img src="https://picsum.photos/400/400?random=12" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Portfolio" />
                     <div className="absolute inset-0 bg-brand-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <PenTool className="text-white" size={32} />
                    </div>
                </div>
                <div className="col-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
                    <img src="https://picsum.photos/800/400?random=13" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Portfolio" />
                    <div className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform">
                        Vidéo IA
                    </div>
                </div>
            </div>
            <div className="text-center mt-16">
                <Link to="/portfolio" className="px-10 py-4 bg-slate-900 text-white rounded-full hover:bg-brand-primary transition-colors inline-flex items-center gap-3 font-bold shadow-lg shadow-slate-900/20">
                    {t.hero.ctaSecondary} <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-serif font-bold text-center mb-20">{t.valueProp.title}</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {t.valueProp.items.map((item, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-inner">
                            {i === 0 && <Zap size={36} className="text-brand-accent" />}
                            {i === 1 && <TrendingUp size={36} className="text-brand-secondary" />}
                            {i === 2 && <Target size={36} className="text-brand-primary" />}
                            {i === 3 && <Users size={36} className="text-indigo-600" />}
                        </div>
                        <h4 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-primary text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary rounded-full mix-blend-overlay filter blur-[64px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary rounded-full mix-blend-overlay filter blur-[64px]"></div>

        <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">{t.contact.subtitle.split('?')[0]}?</h2>
            <p className="text-2xl text-indigo-100 mb-12 max-w-2xl mx-auto font-light">
                {t.contact.subtitle.split('?')[1] || "Transformez votre vision en réalité dès aujourd'hui."}
            </p>
            <Link to="/contact" className="px-12 py-6 bg-white text-brand-primary font-bold text-xl rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all">
                {t.nav.cta}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;