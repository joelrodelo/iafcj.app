import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, HelpCircle } from 'lucide-react';
import { useSEO } from '../utils/useSEO';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contacto - IAFCJ App',
    description: 'Ponte en contacto con el equipo de IAFCJ App. Estamos aquí para ayudarte con preguntas, sugerencias o soporte técnico relacionado con nuestras herramientas digitales.',
    canonical: '/contacto',
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Contacto
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Estamos aquí para ayudarte. Si tienes preguntas, sugerencias, necesitas soporte técnico o simplemente quieres ponerte en contacto con nosotros, esta es la forma de hacerlo.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Información General */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="text-blue-600" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Información General</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para consultas generales, sugerencias sobre nuestras herramientas, o información sobre IAFCJ App, puedes contactarnos a través de los siguientes medios.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Estamos comprometidos a responder a todas las consultas en un plazo razonable. Por favor, ten paciencia mientras revisamos y respondemos a tu mensaje.
              </p>
            </div>

            {/* Soporte Técnico */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <HelpCircle className="text-blue-600" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">Soporte Técnico</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si experimentas problemas técnicos con nuestras herramientas, por favor proporciona la mayor cantidad de información posible:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Descripción detallada del problema</li>
                <li>Dispositivo y navegador que estás usando</li>
                <li>Pasos para reproducir el problema</li>
                <li>Capturas de pantalla si es posible</li>
              </ul>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Envíanos un Mensaje</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Por el momento, estamos trabajando en implementar un formulario de contacto directo. Mientras tanto, puedes contactarnos a través de los siguientes medios:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Correo Electrónico</h3>
                    <p className="text-gray-700">
                      Para consultas generales y soporte, puedes enviarnos un correo electrónico. Por favor, incluye toda la información relevante para que podamos ayudarte de la mejor manera posible.
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                      (Dirección de correo electrónico disponible próximamente)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Consultas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Tipos de Consultas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Preguntas sobre Herramientas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si tienes preguntas sobre cómo usar nuestras herramientas, qué funcionalidades están disponibles, o cómo aprovechar al máximo nuestros recursos, estamos aquí para ayudarte.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sugerencias y Feedback</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tu feedback es invaluable para nosotros. Si tienes sugerencias sobre cómo mejorar nuestras herramientas, nuevas funcionalidades que te gustaría ver, o comentarios sobre tu experiencia, nos encantaría escucharte.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Reportar Problemas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si encuentras algún error, problema técnico, o contenido que necesita corrección, por favor háznoslo saber. Incluye toda la información relevante para que podamos investigar y resolver el problema rápidamente.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Colaboración y Asociaciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si estás interesado en colaborar con nosotros, asociarte con IAFCJ App, o contribuir de alguna manera a nuestro trabajo, estaríamos encantados de conversar contigo.
                </p>
              </div>
            </div>
          </section>

          {/* Información Adicional */}
          <section className="mb-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Información Adicional</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Tiempo de Respuesta:</strong> Nos esforzamos por responder a todas las consultas dentro de 2-3 días hábiles. Para consultas urgentes, haremos nuestro mejor esfuerzo para responder más rápidamente.
              </p>
              <p>
                <strong>Horario de Atención:</strong> Revisamos y respondemos consultas durante días hábiles. Por favor, ten paciencia durante fines de semana y días festivos.
              </p>
              <p>
                <strong>Idiomas:</strong> Actualmente, respondemos consultas principalmente en español. Si necesitas comunicarte en otro idioma, haremos nuestro mejor esfuerzo para ayudarte.
              </p>
            </div>
          </section>

          {/* Recursos Adicionales */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Recursos Adicionales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes de contactarnos, es posible que encuentres respuestas a tus preguntas en estos recursos:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <Link to="/blog" className="text-blue-600 hover:text-blue-800 underline">
                  Nuestro Blog
                </Link>
                {' '}— Artículos y guías sobre nuestras herramientas
              </li>
              <li>
                <Link to="/acerca-de" className="text-blue-600 hover:text-blue-800 underline">
                  Acerca de Nosotros
                </Link>
                {' '}— Información sobre IAFCJ App y nuestra misión
              </li>
              <li>
                <Link to="/privacidad" className="text-blue-600 hover:text-blue-800 underline">
                  Política de Privacidad
                </Link>
                {' '}— Información sobre cómo manejamos tus datos
              </li>
              <li>
                <a 
                  href="http://himnario.iafcj.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Himnario Digital
                </a>
                {' '}— Acceso directo a nuestra herramienta principal
              </li>
            </ul>
          </section>

          {/* Mensaje Final */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed text-center">
              Gracias por tu interés en IAFCJ App. Estamos aquí para servirte y esperamos poder ayudarte con tus consultas. Tu feedback y participación son fundamentales para nuestro trabajo continuo de mejorar y expandir nuestras herramientas.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
