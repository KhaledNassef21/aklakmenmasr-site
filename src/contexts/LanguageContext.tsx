import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    'site.name': 'أكلك من مصر',
    'site.tagline': 'Aklak Men Masr',
    'nav.home': 'الرئيسية',
    'nav.menu': 'المنيو',
    'nav.about': 'عنّا',
    'nav.contact': 'تواصل معنا',
    'nav.whatsapp': 'واتساب',
    'nav.order': 'اطلب الآن',
    
    // Home Page
    'home.hero.title': 'كل الأكلات اللي بتحبها',
    'home.hero.subtitle': 'توصلك لحد باب بيتك في أبوظبي',
    'home.hero.description': 'أكل مصري أصيل، طبخ بيتي، جودة عالية - نوصلك في كل أنحاء أبوظبي',
    'home.hero.cta': 'اطلب دلوقتي',
    'home.features.authentic': 'أكل مصري أصيل',
    'home.features.authentic.desc': 'وصفات تقليدية من قلب المطبخ المصري',
    'home.features.fresh': 'طبخ يومي طازج',
    'home.features.fresh.desc': 'نطبخ كل يوم بمكونات طازة وعالية الجودة',
    'home.features.delivery': 'توصيل سريع',
    'home.features.delivery.desc': 'نوصلك في كل أنحاء أبوظبي بأسرع وقت',
    'home.featured.title': 'الأكلات المميزة اليوم',
    'home.testimonials.title': 'ايه رأي عملائنا',
    
    // Menu
    'menu.title': 'منيو أكلك من مصر',
    'menu.all': 'كل الأصناف',
    'menu.main': 'أكلات شعبية',
    'menu.stuffed': 'محشي',
    'menu.bakery': 'مخبوزات وفطير',
    'menu.desserts': 'حلويات شرقية',
    'menu.drinks': 'مشروبات',
    'menu.add.cart': 'أضف للسلة',
    'menu.out.stock': 'مش متوفر',
    
    // Cart
    'cart.title': 'سلة الطلبات',
    'cart.empty': 'السلة فاضية',
    'cart.empty.desc': 'ابدأ اختار أكلاتك المفضلة',
    'cart.total': 'الإجمالي',
    'cart.order.whatsapp': 'اطلب عبر الواتساب',
    'cart.clear': 'فضي السلة',
    'cart.confirm.whatsapp': 'هيتم تأكيد الطلب عبر الواتساب',
    
    // About
    'about.title': 'عن أكلك من مصر',
    'about.hero.title': 'قصتنا',
    'about.hero.subtitle': 'من قلب مصر لأبوظبي، نجيبلك طعم البيت الأصيل',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.hero.title': 'خلينا نتكلم',
    'contact.hero.subtitle': 'احنا هنا عشان نخدمك ونسمع رأيك',
    
    // Common
    'aed': 'درهم',
    'order.now': 'اطلب الآن',
    'add.to.cart': 'أضف للسلة',
    'view.menu': 'شوف المنيو',
    'phone': 'تليفون',
    'whatsapp': 'واتساب',
    'email': 'إيميل',
    'address': 'العنوان'
  },
  en: {
    // Header
    'site.name': 'Aklak Men Masr',
    'site.tagline': 'أكلك من مصر',
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'nav.order': 'Order Now',
    
    // Home Page
    'home.hero.title': 'All Your Favorite Egyptian Food',
    'home.hero.subtitle': 'Delivered to Your Door in Abu Dhabi',
    'home.hero.description': 'Authentic Egyptian cuisine, homemade cooking, high quality - we deliver all over Abu Dhabi',
    'home.hero.cta': 'Order Now',
    'home.features.authentic': 'Authentic Egyptian Food',
    'home.features.authentic.desc': 'Traditional recipes from the heart of Egyptian kitchen',
    'home.features.fresh': 'Fresh Daily Cooking',
    'home.features.fresh.desc': 'We cook daily with fresh, high-quality ingredients',
    'home.features.delivery': 'Fast Delivery',
    'home.features.delivery.desc': 'We deliver all over Abu Dhabi quickly',
    'home.featured.title': 'Today\'s Featured Dishes',
    'home.testimonials.title': 'What Our Customers Say',
    
    // Menu
    'menu.title': 'Aklak Men Masr Menu',
    'menu.all': 'All Items',
    'menu.main': 'Popular Dishes',
    'menu.stuffed': 'Stuffed Dishes',
    'menu.bakery': 'Bakery & Feteer',
    'menu.desserts': 'Oriental Sweets',
    'menu.drinks': 'Beverages',
    'menu.add.cart': 'Add to Cart',
    'menu.out.stock': 'Out of Stock',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Cart is Empty',
    'cart.empty.desc': 'Start choosing your favorite dishes',
    'cart.total': 'Total',
    'cart.order.whatsapp': 'Order via WhatsApp',
    'cart.clear': 'Clear Cart',
    'cart.confirm.whatsapp': 'Order will be confirmed via WhatsApp',
    
    // About
    'about.title': 'About Aklak Men Masr',
    'about.hero.title': 'Our Story',
    'about.hero.subtitle': 'From the heart of Egypt to Abu Dhabi, bringing you authentic home taste',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.hero.title': 'Let\'s Talk',
    'contact.hero.subtitle': 'We\'re here to serve you and hear your feedback',
    
    // Common
    'aed': 'AED',
    'order.now': 'Order Now',
    'add.to.cart': 'Add to Cart',
    'view.menu': 'View Menu',
    'phone': 'Phone',
    'whatsapp': 'WhatsApp',
    'email': 'Email',
    'address': 'Address'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};