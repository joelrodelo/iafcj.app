import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/acerca-de" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;