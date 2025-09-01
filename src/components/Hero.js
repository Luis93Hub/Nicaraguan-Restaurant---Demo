import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
      <section id="inicio" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Auténticos Sabores de 
                <span className="text-blue-200 block">Nicaragua</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Descubrí los sabores tradicionales de nuestra tierra. Desde el gallo pinto hasta el nacatamal, 
                cada plato cuenta la historia de Nicaragua.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Ver Menú
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                  Reservar Mesa
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-blue-100">4.8 de 5 estrellas • 324 reseñas</span>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/restaurant.jpg"
                alt="Interior del restaurante"
                width={600}
                height={384}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}