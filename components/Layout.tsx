import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleLang = () => setLang(lang === 'FR' ? 'EN' : 'FR');

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-slate-900 selection:bg-brand-secondary selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Baraka</span>
            <span className="text-slate-900 group-hover:text-brand-primary transition-colors">Vision</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-sm font-medium hover:text-brand-secondary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-secondary after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleLang} className="flex items-center text-sm font-bold text-gray-600 hover:text-brand-primary transition-colors bg-white/50 px-3 py-1 rounded-full border border-gray-200">
              <Globe size={16} className="mr-1" /> {lang}
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-gradient-primary text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleLang} className="flex items-center text-sm font-bold text-gray-600">
              {lang}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-lg font-medium text-gray-800 hover:text-brand-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="w-full text-center py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg"
            >
              {t.nav.cta}
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all hover:scale-110 flex items-center justify-center ring-4 ring-white/30"
      >
        <MessageCircle size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Baraka Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Donnez du pouvoir à vos mots et à vos images. Agence créative nouvelle génération propulsée par l'Intelligence Artificielle.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">Copywriting</li>
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">Photo IA</li>
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">Vidéo IA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">Mentions Légales</li>
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">CGV</li>
              <li className="hover:text-brand-secondary transition-colors cursor-pointer">Politique de confidentialité</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">contact@barakavision.com</p>
            <p className="text-sm text-gray-400">+33 6 00 00 00 00</p>
            <div className="mt-6 flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Baraka Vision. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;