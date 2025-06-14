import React, { useState } from 'react';
import { menuItems, categories } from '../data/menuItems';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();
  const { language, t } = useLanguage();

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('menu.title')}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-700'
            }`}
          >
            {t('menu.all')}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-700'
              }`}
            >
              {language === 'ar' ? category.nameAr : category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={language === 'ar' ? item.nameAr : item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {!item.available && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {t('menu.out.stock')}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? item.nameAr : item.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {language === 'ar' ? item.descriptionAr : item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-orange-600">
                    {item.price} {t('aed')}
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    disabled={!item.available}
                    className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
                      item.available
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white hover:shadow-xl hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {item.available ? t('menu.add.cart') : t('menu.out.stock')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-2xl">لا توجد أصناف في هذا القسم حالياً</p>
            <p className="text-gray-400 text-lg mt-2">No items found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;