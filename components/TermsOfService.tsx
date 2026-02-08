import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../utils/useSEO';

export const TermsOfService: React.FC = () => {
  useSEO({
    title: 'Términos de Servicio - IAFCJ App',
    description: 'Términos y condiciones de uso de IAFCJ App y sus herramientas digitales. Descripción del servicio, uso aceptable y limitaciones de responsabilidad.',
    canonical: '/terminos',
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Términos de Servicio
          </h1>

          <div className="text-sm text-gray-500 mb-12">
            <p className="font-semibold">IAFCJ App & Himnario Digital</p>
            <p>Última actualización: 7 de febrero de 2026</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Aceptación de los términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al acceder o utilizar el sitio web iafcj.app, el subdominio himnario.iafcj.app o cualquier herramienta o servicio asociado («el Servicio»), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar el Servicio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El uso continuado del Servicio tras la publicación de cambios en estos términos constituye la aceptación de dichos cambios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Descripción del servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IAFCJ App es una iniciativa digital independiente que ofrece herramientas y recursos en línea para la comunidad de la Iglesia Apostólica de la Fe en Cristo Jesús. El Servicio incluye, entre otros:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>El sitio web informativo iafcj.app (portal, blog, páginas institucionales)</li>
              <li>El Himnario Digital (himnario.iafcj.app), que permite consultar letras, acordes y búsqueda de himnos y coros</li>
              <li>Contenido educativo, guías y artículos publicados en el blog</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              El Servicio se ofrece «tal cual» y puede ser modificado, suspendido o ampliado en cualquier momento sin obligación de aviso previo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Propiedad intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La marca «IAFCJ App», el diseño del sitio, los textos originales y el software que opera el Servicio son propiedad de IAFCJ App o de sus colaboradores. No se concede ninguna licencia implícita sobre dichos elementos más allá del uso normal del Servicio.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los himnos, coros, letras y arreglos musicales incluidos en el Himnario Digital pertenecen a sus respectivos autores o titulares de derechos. Su inclusión en el Servicio tiene fines informativos, educativos y de apoyo comunitario. Cualquier uso comercial o reproducción masiva del contenido musical debe respetar los derechos de autor aplicables.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Si usted es titular de derechos sobre algún contenido y considera que su uso en el Servicio no está autorizado, puede contactarnos para solicitar su revisión o retiro (ver sección de Contacto).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Uso aceptable y restricciones</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted se compromete a utilizar el Servicio de forma lícita y respetuosa. No está permitido:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Utilizar el Servicio para fines ilegales o que infrinjan derechos de terceros</li>
              <li>Intentar acceder a sistemas, datos o cuentas ajenos o alterar el funcionamiento del Servicio</li>
              <li>Extraer, copiar masivamente o redistribuir contenido del Servicio con fines comerciales no autorizados</li>
              <li>Utilizar bots, scrapers o medios automatizados que sobrecarguen el Servicio o afecten la experiencia de otros usuarios</li>
              <li>Publicar o transmitir contenido ofensivo, difamatorio o que viole la dignidad de personas o comunidades</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de restringir o denegar el acceso a usuarios que incumplan estos términos o que, a nuestro criterio, perjudiquen el Servicio o a la comunidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitaciones de responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El Servicio se proporciona «tal cual» y «según disponibilidad». En la máxima medida permitida por la ley aplicable, IAFCJ App y sus colaboradores no serán responsables por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso del Servicio, incluyendo pero no limitado a: pérdida de datos, interrupciones, errores en el contenido o decisiones tomadas en base al mismo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              No garantizamos que el Servicio esté libre de errores, que esté disponible en todo momento o que cumpla requisitos específicos de uso. El usuario utiliza el Servicio bajo su propia responsabilidad.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Los enlaces a sitios de terceros no implican respaldo ni responsabilidad sobre el contenido, políticas o prácticas de esos sitios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Modificaciones a los términos</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              IAFCJ App puede modificar estos Términos de Servicio en cualquier momento. Los cambios serán publicados en esta página con una nueva fecha de «Última actualización».
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se recomienda revisar periódicamente esta página. El uso continuado del Servicio tras la publicación de cambios constituye la aceptación de los términos modificados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Legislación aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos Términos de Servicio se rigen por las leyes aplicables en el lugar desde el que se opera el proyecto. Cualquier controversia derivada de estos términos o del uso del Servicio se someterá a los tribunales competentes en dicho lugar, salvo que la ley aplicable disponga otra cosa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para consultas sobre estos Términos de Servicio o sobre el uso del Servicio, puede contactarnos a través de la <Link to="/contacto" className="text-blue-600 hover:text-blue-800 underline">página de contacto</Link> o por correo electrónico a <a href="mailto:contacto@iafcj.app" className="text-blue-600 hover:text-blue-800 underline">contacto@iafcj.app</a>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para información sobre el tratamiento de datos personales, consulte nuestra <Link to="/privacidad" className="text-blue-600 hover:text-blue-800 underline">Política de Privacidad</Link>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
