import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Volver al inicio</span>
          </button>
        </div>

        {/* Contenido */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Política de Privacidad
          </h1>
          
          <div className="text-sm text-gray-500 mb-12">
            <p className="font-semibold">IAFCJ App & Himnario Digital</p>
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Identidad del responsable</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El presente sitio web y sus aplicaciones asociadas son operados por IAFCJ App, una iniciativa digital independiente creada con el objetivo de apoyar y facilitar el acceso a herramientas, recursos y contenidos de utilidad para la comunidad cristiana, sin representar oficialmente a ninguna organización religiosa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Dominios asociados:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>https://iafcj.app</li>
              <li>https://himnario.iafcj.app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Información que recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio no solicita información personal directamente a los usuarios, salvo cuando el usuario decide proporcionar información de manera voluntaria a través de medios de contacto explícitos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              De forma automática, pueden recopilarse datos anónimos como:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Tipo de dispositivo</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de navegación</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Esta información se utiliza exclusivamente con fines estadísticos, técnicos y de mejora del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Uso de cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Este sitio puede utilizar cookies para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Analizar el uso y tráfico del sitio</li>
              <li>Mejorar la experiencia de navegación</li>
              <li>Mostrar anuncios relevantes mediante Google AdSense</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-2">
              Las cookies no recopilan información personal identificable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El usuario puede configurar su navegador para rechazar el uso de cookies si así lo desea.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Google AdSense</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio utiliza Google AdSense, un servicio de publicidad proporcionado por Google Inc.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google puede utilizar cookies para mostrar anuncios personalizados o no personalizados, en función de la configuración del usuario y de sus políticas de privacidad.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Puedes consultar cómo Google gestiona los datos en:{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Enlaces a sitios externos</h2>
            <p className="text-gray-700 leading-relaxed">
              Nuestros sitios pueden contener enlaces a páginas externas. IAFCJ App no se responsabiliza por las prácticas de privacidad, políticas o contenido de dichos sitios externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Contenido y derechos de autor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El contenido presentado en este sitio y en el himnario digital se utiliza con fines informativos, educativos y de apoyo comunitario.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los derechos de autor de los cantos, himnos o textos pertenecen a sus respectivos autores o titulares.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Si algún contenido infringe derechos de autor, el titular puede solicitar su revisión o retiro a través de los medios de contacto del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Cambios en esta política</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              IAFCJ App se reserva el derecho de modificar esta Política de Privacidad en cualquier momento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Las actualizaciones serán publicadas en esta misma página.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para dudas relacionadas con esta política, puedes comunicarte a través de los medios de contacto disponibles en el sitio.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

