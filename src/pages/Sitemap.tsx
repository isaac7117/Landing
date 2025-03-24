import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Phone, HelpCircle, Map, Info, Book, ShoppingCart, User } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Principal',
      icon: Home,
      links: [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
        { name: 'Servicios', path: '/servicios' }
      ]
    },
    {
      title: 'Productos',
      icon: ShoppingCart,
      links: [
        { name: 'Catálogo', path: '/catalogo' },
        { name: 'Ofertas', path: '/ofertas' },
        { name: 'Novedades', path: '/novedades' }
      ]
    },
    {
      title: 'Soporte',
      icon: HelpCircle,
      links: [
        { name: 'Ayuda', path: '/ayuda' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Tutoriales', path: '/tutoriales' }
      ]
    },
    {
      title: 'Usuario',
      icon: User,
      links: [
        { name: 'Mi Cuenta', path: '/mi-cuenta' },
        { name: 'Pedidos', path: '/pedidos' },
        { name: 'Configuración', path: '/configuracion' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Mapa del Sitio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteStructure.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Icon className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
                    >
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gray-50 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Enlaces Importantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/contacto"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Contáctanos
          </Link>
          <Link
            to="/ayuda"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            Centro de Ayuda
          </Link>
          <Link
            to="/privacidad"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Info className="h-5 w-5 mr-2" />
            Política de Privacidad
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sitemap;