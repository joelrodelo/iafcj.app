import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Hammer, Globe, Music, Users, HeartHandshake } from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { Tool } from '../types';
import { useSEO } from '../utils/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: 'IAFCJ App - Herramientas Digitales para la Iglesia',
    description: 'Portal completo de herramientas digitales para la Iglesia Apostólica de la Fe en Cristo Jesús. Accede al Himnario Digital, guías para ministerio de alabanza y más.',
    canonical: '/',
  });
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

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-24">
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
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
            Una suite centralizada de utilidades digitales diseñadas para facilitar el ministerio, la alabanza y la organización de la Iglesia Apostólica de la Fe en Cristo Jesús.
          </p>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            IAFCJ App es una iniciativa digital comprometida con proporcionar herramientas de alta calidad que sirvan a la comunidad eclesiástica. Nuestro objetivo es hacer que los recursos valiosos sean más accesibles, facilitar el ministerio y fortalecer las conexiones dentro de la comunidad a través de tecnología moderna y útil.
          </p>
        </header>

        {/* Tools Grid */}
        <section className="mb-20">
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

        {/* Sección de Contenido Educativo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Recursos y Contenido para la Iglesia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Blog y Artículos Educativos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Explora nuestro blog con artículos sobre ministerio de alabanza, tecnología en la iglesia, guías prácticas y reflexiones sobre el ministerio. Encuentra consejos para directores de alabanza, información sobre nuestras herramientas y contenido que puede ayudarte en tu ministerio.
              </p>
              <Link 
                to="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Ver todos los artículos →
              </Link>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Guías y Tutoriales
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aprende a usar nuestras herramientas de manera efectiva con nuestras guías completas. Desde cómo usar el Himnario Digital hasta consejos para mejorar tu ministerio de alabanza, tenemos recursos que te ayudarán a aprovechar al máximo nuestras herramientas.
              </p>
              <Link 
                to="/blog"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Explorar guías →
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              ¿Por Qué Usar Herramientas Digitales en la Iglesia?
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                En la era digital actual, las iglesias están descubriendo los beneficios significativos de adoptar herramientas tecnológicas modernas. Estas herramientas no reemplazan la importancia de la comunidad presencial o las relaciones personales, sino que las complementan y amplifican.
              </p>
              <p>
                <strong>Accesibilidad Mejorada:</strong> Las herramientas digitales hacen que los recursos valiosos estén disponibles las 24 horas del día, desde cualquier lugar del mundo. Esto es especialmente importante para congregaciones con miembros distribuidos geográficamente o para aquellos que necesitan acceso a recursos fuera de los horarios de servicio.
              </p>
              <p>
                <strong>Eficiencia y Organización:</strong> Las herramientas digitales pueden simplificar tareas administrativas, facilitar la planificación de servicios y mejorar la comunicación dentro de la congregación. Esto permite que los líderes se concentren más en el ministerio y menos en tareas administrativas.
              </p>
              <p>
                <strong>Alcance Ampliado:</strong> La tecnología permite que el mensaje y los recursos de la iglesia lleguen a más personas. Ya sea a través de transmisiones en vivo, contenido en línea o herramientas accesibles, la tecnología puede amplificar el impacto del ministerio.
              </p>
              <p>
                <strong>Sostenibilidad:</strong> Las herramientas digitales reducen la necesidad de materiales impresos, lo que no solo ahorra costos sino que también reduce el impacto ambiental. Esto es especialmente relevante para recursos que necesitan actualizarse regularmente, como himnarios o materiales de enseñanza.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Beneficios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Cómo Nuestras Herramientas Te Ayudan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Para Directores de Alabanza
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Planifica servicios más efectivos con acceso rápido a himnos, búsqueda por tema y organización por categorías. El Himnario Digital te permite encontrar el himno perfecto en segundos y compartirlo fácilmente con tu equipo.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Para Equipos de Música
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Accede a letras y acordes completos desde cualquier dispositivo. Prepara ensayos con anticipación y ten toda la información que necesitas durante las presentaciones, todo en un solo lugar accesible.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Para la Congregación
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Participa plenamente en la adoración incluso si no conoces los himnos de memoria. Los visitantes pueden seguir fácilmente y los miembros pueden usar el himnario para devocionales personales.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Compromiso */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Nuestro Compromiso Contigo
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              En IAFCJ App, entendemos que la tecnología debe servir al ministerio, no al revés. Por eso, cada herramienta que desarrollamos está diseñada con un propósito claro: facilitar el ministerio y fortalecer la comunidad de la Iglesia Apostólica de la Fe en Cristo Jesús.
            </p>
            <p>
              <strong>Calidad y Confiabilidad:</strong> Nos comprometemos a mantener nuestras herramientas actualizadas, funcionando correctamente y libres de errores. Tu confianza es importante para nosotros.
            </p>
            <p>
              <strong>Escucha Activa:</strong> Valoramos tu feedback y lo usamos para mejorar continuamente nuestras herramientas. Si tienes sugerencias o encuentras problemas, estamos aquí para escucharte.
            </p>
            <p>
              <strong>Accesibilidad:</strong> Creemos que los recursos valiosos deben ser accesibles para todos. Trabajamos para asegurar que nuestras herramientas sean fáciles de usar, independientemente de tu nivel de conocimiento tecnológico.
            </p>
            <p>
              <strong>Mejora Continua:</strong> El lanzamiento de una herramienta es solo el comienzo. Estamos comprometidos a mejorar y expandir nuestras herramientas basándonos en las necesidades reales de la comunidad.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
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
      </main>
    </div>
  );
};
