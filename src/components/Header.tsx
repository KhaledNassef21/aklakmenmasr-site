import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Phone, Globe } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { id: 'home', name: t('nav.home') },
    { id: 'menu', name: t('nav.menu') },
    { id: 'about', name: t('nav.about') },
    { id: 'contact', name: t('nav.contact') },
  ];

  const whatsappMessage = language === 'ar' 
    ? 'مرحبًا، حابب أطلب من منيو أكلك من مصر'
    : 'Hello, I would like to order from Aklak Men Masr menu';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onPageChange('home')}>
              <h1 className="text-3xl font-bold text-orange-700">
                <span className="text-red-700">أكلك</span> من مصر
              </h1>
              <p className="text-sm text-gray-600 font-medium">Aklak Men Masr</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 space-x-reverse bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عر'}</span>
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/971524081002?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 space-x-reverse bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">{t('nav.whatsapp')}</span>
            </a>

            {/* Cart */}
            <button
              onClick={onCartToggle}
              className="relative text-gray-700 hover:text-orange-700 transition-colors bg-orange-100 p-3 rounded-full hover:bg-orange-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-right px-4 py-3 rounded-lg text-lg font-semibold transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href={`https://wa.me/971524081002?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 space-x-reverse bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors w-full"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">{t('nav.whatsapp')}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;