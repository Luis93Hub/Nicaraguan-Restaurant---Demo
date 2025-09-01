import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fundado en YYYY por la familia Apellido, &quot;Sabores de Nicaragua&quot; nació del amor por preservar 
              las tradiciones culinarias de nuestro país. Cada receta ha sido transmitida de generación en 
              generación, manteniendo el sabor auténtico que caracteriza nuestra cocina.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Utilizamos ingredientes frescos y locales, trabajando directamente con productores nicaragüenses 
              para garantizar la calidad y autenticidad de cada plato.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Platos tradicionales</div>
              </div>
            </div>
          </div>
          <div>
            <Image 
                src={`/images/chef.jpg`}
                alt={`chef`}
                width={600}
                height={384}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
}