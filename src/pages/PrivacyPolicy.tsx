// src/pages/PrivacyPolicy.tsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introducción</h2>
        <p className="text-gray-700">
          Explica aquí cómo tu sitio/webapp maneja los datos de los usuarios...
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Datos recopilados</h2>
        <p className="text-gray-700">
          Lista qué datos recopilas (ej.: cookies, formularios, analytics).
        </p>
      </section>
      {/* Agrega más secciones según sea necesario */}
    </div>
  );
};

export default PrivacyPolicy;