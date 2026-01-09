import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostMetadata } from '../../types';

interface BlogListProps {
  posts: BlogPostMetadata[];
}

const categoryColors: Record<string, string> = {
  'Lanzamiento': 'text-blue-600',
  'Actualización': 'text-green-600',
  'Desarrollo': 'text-purple-600',
  'Mejoras': 'text-orange-600',
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16 min-h-screen flex flex-col">
        <div className="flex-grow">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium"
          >
            ← Volver al inicio
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Blog de IAFCJ App
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Noticias, actualizaciones y contenido sobre nuestras herramientas, desarrollo y recursos para la comunidad IAFCJ.
            </p>
          </header>

          <div className="space-y-8 mb-16">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <span className="text-gray-300">•</span>
                  <span className={`text-sm font-medium ${categoryColors[post.category] || 'text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        </div>

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
