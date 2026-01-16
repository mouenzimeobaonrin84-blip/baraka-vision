import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import { X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('FR');
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
        setShowLeadMagnet(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/portfolio" element={<Portfolio lang={lang} />} />
          <Route path="/pricing" element={<Pricing lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />
        </Routes>

        {/* Lead Magnet Popup */}
        {showLeadMagnet && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
                    <button 
                        onClick={() => setShowLeadMagnet(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                        <X size={24} />
                    </button>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4">
                            <span className="text-3xl">🎁</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-2">{TRANSLATIONS[lang].leadMagnet.title}</h3>
                        <p className="text-gray-600 mb-6">{TRANSLATIONS[lang].leadMagnet.text}</p>
                        <input type="email" placeholder="Votre email..." className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4 focus:ring-2 focus:ring-brand-primary outline-none" />
                        <button className="w-full py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">
                            {TRANSLATIONS[lang].leadMagnet.button}
                        </button>
                        <button onClick={() => setShowLeadMagnet(false)} className="mt-4 text-xs text-gray-400 hover:underline">Non merci, je ne veux pas vendre plus.</button>
                    </div>
                </div>
            </div>
        )}
      </Layout>
    </Router>
  );
}