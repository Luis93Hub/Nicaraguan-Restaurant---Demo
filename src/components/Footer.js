export default function Footer() {
  return(
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sabores de Nicaragua</h3>
            <p className="text-blue-200">Preservando las tradiciones culinarias de Nicaragua desde YYYY.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menú</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Gallo Pinto</li>
              <li>Nacatamal</li>
              <li>Indio Viejo</li>
              <li>Quesillo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-sm">FB</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
                <span className="text-sm">X</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Sabores de Nicaragua. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Sitio web desarrollado por 
            <span className="text-white font-medium ml-1">Drunic</span>
          </p>        
        </div>
      </div>
    </footer>
  );
}