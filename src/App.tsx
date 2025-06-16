import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // ⬅️ الزر الجديد

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // التمرير للأعلى عند تغيير الصفحة
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header currentPage={currentPage} onPageChange={handlePageChange} />
          <main className="flex-grow">
            {renderPage()}
          </main>
          <Footer />
          <ScrollToTopButton /> {/* ⬅️ هنا تم الإضافة */}
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
