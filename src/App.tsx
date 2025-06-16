import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AuthPage from './components/AuthPage'; // ⬅️ الصفحة الجديدة
import AdminPage from './components/AdminPage'; // ⬅️ الصفحة الجديدة
import ScrollToTopButton from './components/ScrollToTopButton';

// Contexts
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <>
            <Header currentPage={currentPage} onPageChange={handlePageChange} />

            {/* التمرير للأعلى عند تغيير الصفحة */}
            <ScrollToTopButton />

            <main className="flex-grow">
              <Routes>
                {/* المسارات العادية */}
                <Route path="/" element={<HomePage onPageChange={handlePageChange} />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* المسارات الجديدة */}
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/admin" element={<AdminPage />} />
              </Routes>
            </main>

            <Footer />
          </>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
