import React from 'react';
import { X, Plus, Minus, ShoppingBag, Phone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { language, t } = useLanguage();

  const handleCheckout = () => {
    if (state.items.length === 0) return;
    
    const orderDetails = state.items.map(item => 
      `${item.quantity}x ${language === 'ar' ? item.nameAr : item.name}`
    ).join('\n');
    
    const total = state.total.toFixed(2);
    const message = language === 'ar' 
      ? `مرحباً! أريد طلب:\n\n${orderDetails}\n\nالإجمالي: ${total} درهم\n\nشكراً لكم!`
      : `Hello! I would like to order:\n\n${orderDetails}\n\nTotal: ${total} AED\n\nThank you!`;
    
    const whatsappUrl = `https://wa.me/971524081002?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed ${language === 'ar' ? 'right-0' : 'left-0'} top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <h2 className="text-xl font-bold">
              {t('cart.title')}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('cart.empty')}
                </h3>
                <p className="text-gray-500 text-lg">
                  {t('cart.empty.desc')}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 shadow-md">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <img 
                        src={item.image} 
                        alt={language === 'ar' ? item.nameAr : item.name}
                        className="w-20 h-20 object-cover rounded-xl shadow-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {language === 'ar' ? item.nameAr : item.name}
                        </h3>
                        <p className="text-orange-600 font-bold text-lg mt-2">
                          {item.price} {t('aed')}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 flex items-center justify-center hover:from-orange-200 hover:to-red-200 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-gray-900 text-xl min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 flex items-center justify-center hover:from-orange-200 hover:to-red-200 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} {t('aed')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Total & Checkout */}
          {state.items.length > 0 && (
            <div className="border-t bg-white p-6 space-y-6">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>{t('cart.total')}:</span>
                <span className="text-orange-600">{state.total.toFixed(2)} {t('aed')}</span>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-3 space-x-reverse shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="h-6 w-6" />
                  <span>{t('cart.order.whatsapp')}</span>
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  {t('cart.clear')}
                </button>
              </div>
              
              <div className="text-sm text-gray-500 text-center space-y-1 bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">{t('cart.confirm.whatsapp')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;