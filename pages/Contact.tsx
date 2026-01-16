import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key in keyof FormData]?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation Logic
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return t.contact.validation.nameRequired;
        return undefined;
      case 'email':
        if (!value.trim()) return t.contact.validation.emailRequired;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t.contact.validation.emailInvalid;
        return undefined;
      case 'message':
        if (!value.trim()) return t.contact.validation.messageRequired;
        if (value.trim().length < 10) return t.contact.validation.messageLength;
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation if field was touched
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (isValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const isFormValid = !errors.name && !errors.email && !errors.message && 
                      formData.name && formData.email && formData.message;

  return (
    <div className="bg-gray-50 min-h-screen pt-12">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                
                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-primary">{t.contact.title}</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-12">{t.contact.subtitle}</p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 transform group-hover:scale-110 transition-transform duration-300">
                                <Mail size={26} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">Email</h3>
                                <p className="text-gray-600 text-lg">contact@barakavision.com</p>
                                <p className="text-sm text-brand-primary font-medium mt-1">Réponse sous 24h</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 transform group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle size={26} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">WhatsApp</h3>
                                <p className="text-gray-600 text-lg">+33 6 00 00 00 00</p>
                                <p className="text-sm text-green-600 font-medium mt-1">Du Lundi au Vendredi, 9h-18h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/30 transform group-hover:scale-110 transition-transform duration-300">
                                <Calendar size={26} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">Rendez-vous</h3>
                                <a href="#" className="text-brand-accent underline hover:text-amber-600 font-medium text-lg transition-colors">Réserver un appel découverte (15 min)</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                    {isSuccess && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                <CheckCircle2 size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                            <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                            <button 
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 text-brand-primary font-bold hover:underline"
                            >
                                Envoyer un autre message
                            </button>
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                {t.contact.name} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white outline-none transition-all ${
                                        errors.name && touched.name 
                                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                                            : 'border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                                    }`} 
                                    placeholder="John Doe" 
                                />
                                {errors.name && touched.name && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                                        <AlertCircle size={20} />
                                    </div>
                                )}
                            </div>
                            {errors.name && touched.name && (
                                <p className="text-red-500 text-xs mt-2 ml-1 animate-in slide-in-from-top-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                {t.contact.email} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white outline-none transition-all ${
                                        errors.email && touched.email 
                                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                                            : 'border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                                    }`} 
                                    placeholder="john@company.com" 
                                />
                                {errors.email && touched.email && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                                        <AlertCircle size={20} />
                                    </div>
                                )}
                            </div>
                            {errors.email && touched.email && (
                                <p className="text-red-500 text-xs mt-2 ml-1 animate-in slide-in-from-top-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                {t.contact.message} <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <textarea 
                                    name="message"
                                    rows={4} 
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full px-5 py-4 rounded-xl border bg-gray-50 focus:bg-white outline-none transition-all resize-none ${
                                        errors.message && touched.message 
                                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                                            : 'border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                                    }`} 
                                    placeholder="J'ai besoin de..." 
                                />
                                {errors.message && touched.message && (
                                    <div className="absolute right-4 top-4 text-red-500">
                                        <AlertCircle size={20} />
                                    </div>
                                )}
                            </div>
                            {errors.message && touched.message && (
                                <p className="text-red-500 text-xs mt-2 ml-1 animate-in slide-in-from-top-1">{errors.message}</p>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting || !isFormValid && Object.keys(touched).length > 0}
                            className={`w-full py-4 font-bold text-lg rounded-xl transition-all ${
                                isSubmitting || (!isFormValid && Object.keys(touched).length > 0)
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1'
                            }`}
                        >
                            {isSubmitting ? 'Envoi en cours...' : t.contact.send}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;