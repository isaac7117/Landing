import React, { useState } from 'react';
import { Users, Award, Target } from 'lucide-react';

const teamMembers = [
  {
    name: "Ana Rodriguez",
    role: "Fundadora",
    bio: "Emprendedora con más de 10 años de experiencia en desarrollo tecnológico.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Carlos Mendez",
    role: "Director Técnico",
    bio: "Ingeniero especializado en soluciones innovadoras y desarrollo de software.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Laura Fernandez",
    role: "Directora Creativa",
    bio: "Diseñadora con pasión por crear experiencias únicas y memorables.",
    image: "/api/placeholder/300/300"
  }
];

const SobreNosotros = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Sobre Nosotros
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Somos un equipo comprometido con la innovación y el desarrollo de soluciones tecnológicas de vanguardia.
        </p>
      </div>

      {/* Sección de Misión y Valores */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-500" size={50} />
          <h3 className="text-xl font-semibold mb-2">Nuestro Equipo</h3>
          <p className="text-gray-600">
            Un grupo diverso de profesionales apasionados por la tecnología.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="mx-auto mb-4 text-green-500" size={50} />
          <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">
            Crear soluciones innovadoras que transformen la forma de trabajar.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Target className="mx-auto mb-4 text-purple-500" size={50} />
          <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
          <p className="text-gray-600">
            Integridad, innovación, colaboración y excelencia.
          </p>
        </div>
      </div>

      {/* Sección de Equipo */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Nuestro Equipo
        </h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
          
            key={member.name} 
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
            
          >
            <img 
             
              
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-gray-800">
            <Users className="mx-auto mb-4 text-blue-500" size={50} />
              {member.name}
            </h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Modal de Detalle de Miembro */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
           
            <h4 className="text-2xl font-bold text-center mb-2">
              
            </h4>
            <p className="text-gray-600 text-center mb-4">
              
            </p>
            <p className="text-gray-700 text-center">
              
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SobreNosotros;