import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white">
            <HeartHandshake size={16} />
          </span>
          <span className="text-sm font-semibold tracking-wide uppercase text-gray-900">
            IAFCJ App
          </span>
        </Link>
        <div className="flex items-center space-x-6 text-sm">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Inicio
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link to="/acerca-de" className="text-gray-600 hover:text-gray-900 transition-colors">
            Nosotros
          </Link>
          <a 
            href="http://himnario.iafcj.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Himnario ↗
          </a>
        </div>
      </div>
    </nav>
  );
};
