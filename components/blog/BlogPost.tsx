import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost as BlogPostType } from '../../types';

interface BlogPostProps {
  post: BlogPostType;
}

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  'Lanzamiento': { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Actualización': { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
  'Desarrollo': { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
  'Mejoras': { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const categoryStyle = categoryColors[post.category] || {
    text: 'text-gray-600',
    bg: 'bg-gray-50',
    border: 'border-gray-100',
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16 min-h-screen flex flex-col">
        <article className="flex-grow">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium"
          >
            ← Volver al blog
          </Link>
          
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
            <span className="text-gray-300">•</span>
            <span className={`text-sm font-medium ${categoryStyle.text} ${categoryStyle.bg} px-3 py-1 rounded-full`}>
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            {post.title}
          </h1>
          
          <div className="prose prose-lg max-w-none mb-16">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold mb-6 mt-10 text-gray-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 leading-relaxed">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-auto pt-16 pb-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} IAFCJ App. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link 
              to="/acerca-de"
              className="hover:text-gray-600 transition-colors"
            >
              Acerca de
            </Link>
            <Link 
              to="/contacto"
              className="hover:text-gray-600 transition-colors"
            >
              Contacto
            </Link>
            <Link 
              to="/blog"
              className="hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/privacidad"
              className="hover:text-gray-600 transition-colors"
            >
              Privacidad
            </Link>
            <a href="https://iafcj.org" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">Sitio Oficial</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
