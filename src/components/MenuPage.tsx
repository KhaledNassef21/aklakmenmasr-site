import React, { useState } from 'react';
import { MessageCircle, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { menuData, MenuItem } from '../data/menuData';

const MenuPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { key: 'popular', label: t('popularDishes') },
    { key: 'bakery', label: t('bakery') },
    { key: 'desserts', label: t('desserts') },
    { key: 'beverages', label: t('beverages') }
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      language === 'ar' 
        ? 'مرحبًا، حابب أشوف المنيو وأطلب'
        : 'Hello, I would like to see the menu and place an order'
    );
    window.open(`https://wa.me/971524081002?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-amiri">
            {language === 'ar' ? 'منيو أكلك من مصر' : 'Your Food from Egypt Menu'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اختار من مجموعة واسعة من الأكلات المصرية الأصلية'
              : 'Choose from a wide variety of authentic Egyptian dishes'
            }
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name[language]}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description[language]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price} {t('aed')}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <Plus className="h-5 w-5" />
                    <span>{t('addToCart')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="text-center">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 rtl:space-x-reverse mx-auto shadow-lg"
          >
            <MessageCircle className="h-7 w-7" />
            <span>{t('orderViaWhatsApp')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;