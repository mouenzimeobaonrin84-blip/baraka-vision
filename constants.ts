import { ServiceItem, PortfolioItem, Testimonial, PricingTier, BlogPost } from './types';

export const TRANSLATIONS = {
  FR: {
    nav: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Tarifs",
      about: "À Propos",
      blog: "Blog",
      contact: "Contact",
      cta: "Demander un devis"
    },
    hero: {
      title: "Baraka Vision – Donnez du pouvoir à vos mots et à vos images",
      subtitle: "Copywriting stratégique & Création visuelle par Intelligence Artificielle pour l’immobilier, le tourisme, l’e-commerce et les entrepreneurs.",
      intro: "Chez Baraka Vision, nous aidons les marques et les entrepreneurs à capter l’attention, créer l’émotion et convertir leurs audiences en clients. Grâce à la puissance du copywriting et de l’intelligence artificielle créative, nous produisons des contenus percutants, rapides et rentables.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Voir le portfolio"
    },
    services: {
      title: "Nos Services",
      copywriting: {
        title: "Copywriting qui convertit",
        desc: "Pages de vente, publicités, emails et contenus sociaux optimisés pour vendre."
      },
      photo: {
        title: "Création Photo IA",
        desc: "Visuels professionnels, portraits business, affiches immobilières et touristiques."
      },
      video: {
        title: "Création Vidéo IA",
        desc: "Vidéos publicitaires, Reels, TikTok et présentations produits."
      },
      more: "En savoir plus"
    },
    servicesPage: {
        copywriting: {
            title: "Copywriting stratégique",
            desc: "Des textes qui attirent, convainquent et vendent.",
            features: ["Pages de vente", "Publicités Facebook & TikTok", "Emails marketing", "Scripts vidéo"],
            result: "Résultat : Des textes qui attirent, convainquent et vendent."
        },
        photo: {
             title: "Création Photo IA",
             desc: "Des images premium sans coût de shooting.",
             features: ["Portraits professionnels", "Visuels publicitaires", "Affiches immobilier & tourisme", "Contenus réseaux sociaux"],
             result: "Résultat : Des images premium sans coût de shooting."
        },
        video: {
            title: "Création Vidéo IA",
            desc: "Des vidéos modernes qui captent l'attention.",
            features: ["Vidéos publicitaires", "Reels & TikTok", "Présentation produits", "Vidéos immobilières"],
            result: "Résultat : Des vidéos modernes qui captent l'attention."
        }
    },
    targets: {
      title: "Nous accompagnons",
      items: ["Promoteurs immobiliers", "Agences de voyage", "Marques e-commerce", "Entrepreneurs", "Coachs", "Startups"]
    },
    valueProp: {
      title: "Pourquoi Baraka Vision ?",
      items: [
        { title: "Créativité augmentée", desc: "Créativité augmentée par IA." },
        { title: "Conversion", desc: "Contenus orientés conversion." },
        { title: "Rapidité", desc: "Délais rapides." },
        { title: "Prix", desc: "Tarifs accessibles." }
      ]
    },
    portfolio: {
      title: "Découvrez nos réalisations",
      subtitle: "Images IA – Vidéos IA – Copywriting.",
      filterAll: "Tous",
      construction: "De nouveaux projets arrivent très bientôt. Votre projet pourrait être le prochain.",
      cta: "Lancer mon projet"
    },
    pricing: {
      title: "Nos Packs",
      starter: "Pack Starter",
      starterDesc: "Idéal pour débuter.",
      business: "Pack Business",
      businessDesc: "Pour développer votre marque.",
      premium: "Pack Premium",
      premiumDesc: "Pour dominer votre marché."
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle: "Prêt à transformer votre communication ? Faites de vos contenus un moteur de croissance.",
      name: "Nom complet",
      email: "Email professionnel",
      message: "Parlez-nous de votre projet...",
      send: "Envoyer",
      whatsapp: "WhatsApp direct",
      validation: {
        nameRequired: "Le nom est requis.",
        emailRequired: "L'email est requis.",
        emailInvalid: "Veuillez entrer une adresse email valide.",
        messageRequired: "Le message est requis.",
        messageLength: "Le message doit contenir au moins 10 caractères."
      }
    },
    leadMagnet: {
      title: "Guide Gratuit",
      text: "Recevez notre guide gratuit : 5 erreurs qui empêchent vos contenus de vendre.",
      button: "Télécharger"
    },
    aboutPage: {
        title: "Qui sommes-nous ?",
        intro: "Je suis Mouenzime Salami, fondateur de Baraka Vision.",
        story: "Passionné par le marketing digital et les nouvelles technologies, j’ai créé Baraka Vision pour aider les entreprises à se démarquer dans un monde saturé de contenus.",
        mission: "Ma mission : Associer la force des mots, l’impact des visuels et la puissance de l’intelligence artificielle pour générer des résultats concrets : plus de visibilité, plus d’engagement et plus de ventes.",
        valuesTitle: "Nos valeurs",
        values: ["Créativité", "Innovation", "Performance", "Fiabilité"]
    },
    blog: {
        title: "Le Blog",
        subtitle: "Conseils en Copywriting, Marketing Digital et IA Créative."
    }
  },
  EN: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      cta: "Get a Quote"
    },
    hero: {
      title: "Baraka Vision – Empower your words and your images",
      subtitle: "Strategic Copywriting & AI-Powered Visual Creation for Real Estate, Tourism, E-commerce, and Entrepreneurs.",
      intro: "At Baraka Vision, we help brands and entrepreneurs capture attention, create emotion, and convert their audiences into customers. Through the power of copywriting and creative artificial intelligence, we produce impactful, fast, and profitable content.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "View Portfolio"
    },
    services: {
      title: "Our Services",
      copywriting: {
        title: "High-Converting Copy",
        desc: "Sales pages, ads, emails, and social content optimized to sell."
      },
      photo: {
        title: "AI Photo Creation",
        desc: "Professional visuals, business portraits, real estate and tourism posters."
      },
      video: {
        title: "AI Video Creation",
        desc: "Ad videos, Reels, TikTok, and product presentations."
      },
      more: "Learn More"
    },
    servicesPage: {
        copywriting: {
            title: "Strategic Copywriting",
            desc: "Texts that attract, convince, and sell.",
            features: ["Sales Pages", "Facebook & TikTok Ads", "Email Marketing", "Video Scripts"],
            result: "Result: Texts that attract, convince, and sell."
        },
        photo: {
             title: "AI Photo Creation",
             desc: "Premium images without the cost of a photoshoot.",
             features: ["Professional Portraits", "Ad Visuals", "Real Estate & Tourism Posters", "Social Media Content"],
             result: "Result: Premium images without the cost of a photoshoot."
        },
        video: {
            title: "AI Video Creation",
            desc: "Modern videos that capture attention.",
            features: ["Ad Videos", "Reels & TikTok", "Product Presentations", "Real Estate Videos"],
            result: "Result: Modern videos that capture attention."
        }
    },
    targets: {
      title: "We Support",
      items: ["Real Estate Developers", "Travel Agencies", "E-commerce Brands", "Entrepreneurs", "Coaches", "Startups"]
    },
    valueProp: {
      title: "Why Baraka Vision?",
      items: [
        { title: "Augmented Creativity", desc: "Creativity powered by AI." },
        { title: "Conversion", desc: "Content designed to convert." },
        { title: "Speed", desc: "Fast delivery times." },
        { title: "Pricing", desc: "Accessible pricing." }
      ]
    },
    portfolio: {
      title: "Discover Our Work",
      subtitle: "AI Images – AI Videos – Copywriting.",
      filterAll: "All",
      construction: "New projects coming soon. Your project could be next.",
      cta: "Start My Project"
    },
    pricing: {
      title: "Our Packs",
      starter: "Starter Pack",
      starterDesc: "Ideal to start.",
      business: "Business Pack",
      businessDesc: "To grow your brand.",
      premium: "Premium Pack",
      premiumDesc: "To dominate your market."
    },
    contact: {
      title: "Let's Talk About Your Project",
      subtitle: "Ready to transform your communication? Make your content a growth engine.",
      name: "Full Name",
      email: "Business Email",
      message: "Tell us about your project...",
      send: "Send",
      whatsapp: "Direct WhatsApp",
      validation: {
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Message is required.",
        messageLength: "Message must be at least 10 characters long."
      }
    },
    leadMagnet: {
      title: "Free Guide",
      text: "Get our free guide: 5 mistakes preventing your content from selling.",
      button: "Download"
    },
    aboutPage: {
        title: "Who Are We?",
        intro: "I am Mouenzime Salami, founder of Baraka Vision.",
        story: "Passionate about digital marketing and new technologies, I created Baraka Vision to help businesses stand out in a content-saturated world.",
        mission: "My mission: Combine the power of words, the impact of visuals, and the strength of AI to generate concrete results: more visibility, more engagement, and more sales.",
        valuesTitle: "Our Values",
        values: ["Creativity", "Innovation", "Performance", "Reliability"]
    },
    blog: {
        title: "The Blog",
        subtitle: "Tips on Copywriting, Digital Marketing, and Creative AI."
    }
  }
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', category: 'photo', title: 'Immobilier de Luxe (IA)', image: 'https://picsum.photos/800/600?random=1' },
  { id: '2', category: 'copywriting', title: 'Campagne Email E-com', image: 'https://picsum.photos/800/600?random=2' },
  { id: '3', category: 'video', title: 'Reel Tourisme Viral', image: 'https://picsum.photos/800/600?random=3' },
  { id: '4', category: 'photo', title: 'Portrait CEO', image: 'https://picsum.photos/800/600?random=4' },
  { id: '5', category: 'copywriting', title: 'Page de Vente SaaS', image: 'https://picsum.photos/800/600?random=5' },
  { id: '6', category: 'video', title: 'Produit 3D Motion', image: 'https://picsum.photos/800/600?random=6' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "490€",
    features: ["5 Posts Social Media (Copy + Visuel)", "1 Article de Blog", "Optimisation Bio", "Livraison 48h"],
    cta: "Choisir Starter"
  },
  {
    name: "Business",
    price: "990€",
    features: ["1 Page de Vente", "10 Posts Social Media", "1 Vidéo Publicitaire (15s)", "3 Campagnes Email", "Livraison 5 jours"],
    cta: "Choisir Business",
    popular: true
  },
  {
    name: "Premium",
    price: "1990€",
    features: ["Stratégie Complète", "Site Web One-Page Copy", "Pack Visuel Marque (20 images)", "3 Vidéos Reels", "Support Prioritaire"],
    cta: "Choisir Premium"
  }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: "5 erreurs qui empêchent vos contenus de vendre",
        category: "Copywriting",
        date: "12 Oct 2023",
        excerpt: "Pourquoi votre audience ne clique pas ? Voici les pièges à éviter.",
        image: "https://picsum.photos/800/600?random=50"
    },
    {
        id: '2',
        title: "L'IA va-t-elle remplacer les photographes ?",
        category: "IA Créative",
        date: "05 Nov 2023",
        excerpt: "Analyse de l'impact de Midjourney et Stable Diffusion sur le marché.",
        image: "https://picsum.photos/800/600?random=51"
    },
    {
        id: '3',
        title: "Comment structurer une Landing Page performante",
        category: "Marketing Digital",
        date: "20 Nov 2023",
        excerpt: "La structure exacte pour convertir un visiteur froid en client chaud.",
        image: "https://picsum.photos/800/600?random=52"
    }
];