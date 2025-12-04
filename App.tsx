import React from 'react';
import { BookOpen, Hammer, Globe, Music, Users, HeartHandshake } from 'lucide-react';
import { ToolCard } from './components/ToolCard';
import { Tool } from './types';

const App: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 'himnario',
      title: 'Himnario Digital',
      description: 'Colección completa de himnos y coros de la IAFCJ. Búsqueda rápida, letras y acordes optimizados para móvil.',
      url: 'http://himnario.iafcj.app/',
      icon: BookOpen,
      isExternal: true,
      status: 'active'
    },
    {
      id: 'liturgia',
      title: 'Liturgia y Recursos',
      description: 'Guías para directores de culto, lecturas bíblicas y orden del servicio dominical.',
      url: '#',
      icon: Music,
      isExternal: false,
      status: 'coming_soon'
    },
    {
      id: 'directorio',
      title: 'Directorio de Iglesias',
      description: 'Encuentra la congregación más cercana, horarios de servicio y contacto pastoral.',
      url: '#',
      icon: Globe,
      isExternal: false,
      status: 'coming_soon'
    },
    {
      id: 'liderazgo',
      title: 'Portal de Liderazgo',
      description: 'Recursos exclusivos para pastores, líderes locales y administradores.',
      url: '#',
      icon: Users,
      isExternal: false,
      status: 'coming_soon'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <header className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start space-x-2 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white">
              <HeartHandshake size={18} />
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
              IAFCJ App
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Herramientas para la <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              Iglesia Digital
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Una suite centralizada de utilidades digitales diseñadas para facilitar el ministerio, la alabanza y la organización de la Iglesia Apostólica de la Fe en Cristo Jesús.
          </p>
        </header>

        {/* Tools Grid */}
        <section>
          <div className="flex items-center space-x-2 mb-8">
             <Hammer size={18} className="text-gray-400" />
             <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
               Aplicaciones Disponibles
             </h2>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {tools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} IAFCJ App. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Contacto</a>
            <a href="https://iafcj.org" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">Sitio Oficial</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;