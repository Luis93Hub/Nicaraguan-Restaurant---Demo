import { Clock, MapPin, Phone } from "lucide-react";

export default function Contact(){
  return(
    <section id="contacto" className="pt-20 py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Visitanos</h2>
          <p className="text-xl text-blue-100">Te esperamos para que disfrutés la auténtica cocina nicaragüense</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-blue-100">
              Avenida Bolívar 123<br />
              Managua, Nicaragua
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Horarios</h3>
            <p className="text-blue-100">
              Lunes - Domingo<br />
              7:00 AM - 10:00 PM
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8"  />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <p className="text-blue-100">
              <a href="tel:+50512345678" className="hover:text-white transition-colors">+505 1234-5678</a><br />
              <a href="mailto:info@saboresnicaragua.com" className="hover:text-white transition-colors">info@saboresnicaragua.com</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4">
            Hacer Reservación
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
            Ordenar para Llevar
          </button>
        </div>
      </div>
    </section>
  )
}