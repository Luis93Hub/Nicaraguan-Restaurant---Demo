'use client';

import { useState } from "react";

const menuSections = {
    desayunos: {
      title: 'Desayunos',
      subtitle: 'Comenzá tu día con sabores auténticos',
      items: [
        { name: 'Gallo Pinto Tradicional', description: 'Arroz y frijoles rojos con huevo frito, queso fresco y plátano maduro', price: 'C$ 180' },
        { name: 'Desayuno Nica Completo', description: 'Gallo pinto, huevos revueltos, queso, crema, plátano y tortilla', price: 'C$ 220' },
        { name: 'Quesillo con Café', description: 'Quesillo artesanal acompañado de café nicaragüense', price: 'C$ 150' },
        { name: 'Nacatamal Especial', description: 'Masa de maíz rellena de cerdo, arroz, papa y vegetales', price: 'C$ 200' },
      ]
    },
    almuerzos: {
      title: 'Almuerzos',
      subtitle: 'Platos principales que satisfacen',
      items: [
        { name: 'Bistec Encebollado', description: 'Carne de res con cebolla, arroz blanco, frijoles y ensalada', price: 'C$ 320' },
        { name: 'Pollo a la Plancha', description: 'Pechuga de pollo con vegetales salteados y puré de papa', price: 'C$ 280' },
        { name: 'Pescado al Ajillo', description: 'Filete de pescado fresco con salsa de ajo y hierbas', price: 'C$ 350' },
        { name: 'Cerdo en Salsa', description: 'Lomo de cerdo en salsa criolla con yuca hervida', price: 'C$ 300' },
        { name: 'Indio Viejo', description: 'Platillo tradicional de carne desmechada con masa de maíz', price: 'C$ 250' },
      ]
    },
    cenas: {
      title: 'Cenas',
      subtitle: 'Sabores perfectos para cerrar el día',
      items: [
        { name: 'Sopa de Mariscos', description: 'Abundante sopa con camarones, pescado y vegetales frescos', price: 'C$ 380' },
        { name: 'Churrasco Nica', description: 'Carne asada con chimichurri, papas fritas y ensalada mixta', price: 'C$ 420' },
        { name: 'Langostinos al Coco', description: 'Langostinos en salsa de coco con arroz con coco', price: 'C$ 450' },
        { name: 'Tajadas con Queso', description: 'Plátano verde frito con queso fresco y crema', price: 'C$ 180' },
      ]
    },
    bebidas: {
      title: 'Bebidas',
      subtitle: 'Refrescantes y tradicionales',
      items: [
        { name: 'Café Nicaragüense', description: 'Café de altura de las montañas del norte', price: 'C$ 60' },
        { name: 'Fresco de Cacao', description: 'Bebida tradicional de cacao con leche y canela', price: 'C$ 80' },
        { name: 'Chicha de Maíz', description: 'Bebida refrescante de maíz con azúcar y canela', price: 'C$ 70' },
        { name: 'Agua de Coco', description: 'Agua de coco natural servida fría', price: 'C$ 90' },
        { name: 'Pinolillo', description: 'Bebida nacional de maíz tostado y cacao', price: 'C$ 75' },
      ]
    }
  };

export default function Menu() {
  const [activeSection, setActiveSection] = useState('desayunos');

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Nuestro Menú</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Disfrutá de la auténtica cocina nicaragüense preparada con ingredientes frescos y recetas tradicionales
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuSections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeSection === section
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {menuSections[section].title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-blue-800 mb-2 text-center">
            {menuSections[activeSection].title}
          </h3>
          <p className="text-gray-600 text-center mb-8">
            {menuSections[activeSection].subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {menuSections[activeSection].items.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-blue-800">{item.name}</h4>
                  <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}