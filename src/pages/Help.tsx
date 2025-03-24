import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Help = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cómo puedo crear una cuenta?',
      answer: 'Para crear una cuenta, haz clic en el botón "Registrarse" en la esquina superior derecha y sigue las instrucciones.'
    },
    {
      question: '¿Olvidé mi contraseña, qué hago?',
      answer: 'Si olvidaste tu contraseña, puedes usar la opción "¿Olvidaste tu contraseña?" en la página de inicio de sesión para restablecerla.'
    },
    {
      question: '¿Cómo contacto al soporte técnico?',
      answer: 'Puedes contactar a nuestro equipo de soporte técnico a través del formulario de contacto o enviando un email a soporte@ejemplo.com.'
    },
    {
      question: '¿Cuáles son los horarios de atención?',
      answer: 'Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 AM a 6:00 PM (hora local).'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Centro de Ayuda</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openFaq === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">¿No encontraste lo que buscabas?</h3>
          <p className="text-gray-600 mb-4">
            Nuestro equipo de soporte está aquí para ayudarte. No dudes en contactarnos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Contactar Soporte
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Help;