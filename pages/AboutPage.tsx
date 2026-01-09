import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HeartHandshake, Target, Users, Globe } from 'lucide-react';
import { useSEO } from '../utils/useSEO';

export const AboutPage: React.FC = () => {
  useSEO({
    title: 'Acerca de Nosotros - IAFCJ App',
    description: 'Conoce más sobre IAFCJ App, nuestra misión, visión y compromiso con la comunidad de la Iglesia Apostólica de la Fe en Cristo Jesús. Descubre cómo trabajamos para servir con herramientas digitales útiles.',
    canonical: '/acerca-de',
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-24">
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Contenido */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 text-white">
                <HeartHandshake size={24} />
              </span>
              <span className="text-lg font-semibold tracking-wide uppercase text-gray-500">
                IAFCJ App
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Acerca de Nosotros
            </h1>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Historia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IAFCJ App nació de una visión simple pero poderosa: utilizar la tecnología moderna para servir mejor a la comunidad de la Iglesia Apostólica de la Fe en Cristo Jesús. Reconociendo que vivimos en una era digital donde las herramientas tecnológicas pueden amplificar significativamente nuestros esfuerzos ministeriales, nos propusimos crear recursos digitales que fueran tanto útiles como accesibles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comenzamos con el desarrollo del Himnario Digital IAFCJ, una herramienta que facilita el acceso a los himnos y coros utilizados en los servicios de la iglesia. Este proyecto inicial nos permitió entender mejor las necesidades de la comunidad y desarrollar una plataforma que realmente sirviera a los usuarios.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy, IAFCJ App continúa creciendo y evolucionando, siempre con el mismo compromiso fundamental: servir a la comunidad con herramientas digitales de calidad que faciliten el ministerio y fortalezcan la comunidad.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-start space-x-3 mb-4">
              <Target className="text-blue-600 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Misión</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestra misión es proporcionar herramientas digitales de alta calidad que faciliten el ministerio, fortalezcan la comunidad y hagan que los recursos valiosos sean más accesibles para todos los miembros de la Iglesia Apostólica de la Fe en Cristo Jesús.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Creemos que la tecnología, cuando se usa apropiadamente, puede ser una herramienta poderosa para servir a la misión de la iglesia. Nuestro objetivo es crear herramientas que realmente mejoren la experiencia de adoración, faciliten la organización y fortalezcan las conexiones dentro de la comunidad.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-start space-x-3 mb-4">
              <Globe className="text-blue-600 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestra Visión</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Visualizamos un futuro donde todas las congregaciones de la IAFCJ tengan acceso a herramientas digitales modernas que les permitan servir mejor a sus comunidades. Queremos ser parte de una transformación positiva en cómo la iglesia utiliza la tecnología para el ministerio.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestra visión incluye:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Una suite completa de herramientas digitales que cubran diversas necesidades ministeriales</li>
                  <li>Recursos accesibles las 24 horas del día, desde cualquier lugar del mundo</li>
                  <li>Herramientas que sean fáciles de usar, independientemente del nivel de conocimiento tecnológico</li>
                  <li>Una plataforma que crece y evoluciona basándose en las necesidades reales de la comunidad</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-start space-x-3 mb-4">
              <Users className="text-blue-600 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestros Valores</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Servicio</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Todo lo que hacemos está motivado por el deseo de servir. Creemos que la tecnología debe servir al ministerio, no al revés.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Excelencia</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nos comprometemos a crear herramientas de la más alta calidad. La excelencia en lo que hacemos honra a Dios y sirve mejor a la comunidad.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Accesibilidad</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Creemos que los recursos valiosos deben ser accesibles para todos. Trabajamos para eliminar barreras y hacer que nuestras herramientas sean fáciles de usar.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Mejora Continua</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Reconocemos que siempre hay espacio para mejorar. Escuchamos activamente el feedback de nuestros usuarios y trabajamos continuamente para mejorar nuestras herramientas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Integridad</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Operamos con integridad en todo lo que hacemos. Esto incluye transparencia en nuestras prácticas, respeto por la privacidad de los usuarios y honestidad en nuestra comunicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestras Herramientas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Himnario Digital IAFCJ</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Nuestra primera herramienta, el Himnario Digital, proporciona acceso completo a los himnos y coros utilizados en los servicios de la IAFCJ. Con búsqueda avanzada, organización por categorías y diseño responsive, esta herramienta facilita el acceso a recursos musicales valiosos.
                </p>
                <a 
                  href="http://himnario.iafcj.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Acceder al Himnario Digital →
                </a>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Próximas Herramientas</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Estamos trabajando activamente en varias herramientas adicionales que estarán disponibles pronto:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Plataforma de Liturgia y Recursos para directores de culto</li>
                  <li>Directorio completo de iglesias IAFCJ</li>
                  <li>Portal de liderazgo con herramientas administrativas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nuestro Compromiso con la Comunidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IAFCJ App es más que una colección de herramientas digitales; es un compromiso con la comunidad de la Iglesia Apostólica de la Fe en Cristo Jesús. Estamos dedicados a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Escuchar activamente las necesidades y feedback de la comunidad</li>
              <li>Crear herramientas que realmente resuelvan problemas reales</li>
              <li>Mantener nuestros recursos accesibles y gratuitos cuando sea posible</li>
              <li>Continuar mejorando y expandiendo nuestras herramientas basándonos en las necesidades de la comunidad</li>
              <li>Servir con humildad y dedicación a la misión de la iglesia</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cómo Puedes Ayudar</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tu participación es invaluable para nuestro trabajo. Puedes ayudar de varias maneras:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Usa nuestras herramientas</strong>: El uso activo nos ayuda a entender qué funciona y qué necesita mejora</li>
              <li><strong>Comparte tu feedback</strong>: Tus sugerencias y comentarios nos ayudan a mejorar continuamente</li>
              <li><strong>Comparte con otros</strong>: Ayuda a otros a descubrir estas herramientas que pueden ser útiles para ellos</li>
              <li><strong>Reporta problemas</strong>: Si encuentras algún problema o error, háznoslo saber para que podamos corregirlo</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Si tienes ideas, sugerencias o preguntas, no dudes en <Link to="/contacto" className="text-blue-600 hover:text-blue-800 underline">contactarnos</Link>. Tu input es fundamental para nuestro trabajo.
            </p>
          </section>

          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Información de Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para más información sobre IAFCJ App, nuestras herramientas o cómo podemos servirte, visita nuestra <Link to="/contacto" className="text-blue-600 hover:text-blue-800 underline">página de contacto</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              También puedes explorar nuestro <Link to="/blog" className="text-blue-600 hover:text-blue-800 underline">blog</Link> para mantenerte actualizado sobre nuevas funcionalidades, mejoras y recursos disponibles.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
