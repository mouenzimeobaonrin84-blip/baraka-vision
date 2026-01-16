import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS, BLOG_POSTS } from '../constants';
import { Language } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogProps {
  lang: Language;
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.blog.title}</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">{t.blog.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
                <article key={post.id} className="flex flex-col h-full bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary shadow-sm">
                            {post.category}
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                            {post.excerpt}
                        </p>
                        <a href="#" className="inline-flex items-center text-slate-900 font-bold text-sm group-hover:text-brand-primary transition-colors">
                            Lire l'article <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </article>
            ))}
        </div>
        
        <div className="mt-32 text-center bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-100 shadow-inner">
             <h3 className="text-3xl font-serif font-bold mb-8 text-slate-900">Ne manquez aucun conseil</h3>
             <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Votre email pro..." className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none shadow-sm" />
                 <button className="px-8 py-4 bg-gradient-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1">S'abonner</button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;