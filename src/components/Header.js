'use client';
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* LOGO PLACEHOLDER */}
              <Image 
                src="/images/logo.png"
                alt="Empresa Drunic"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-800">Sabores de Nicaragua</h1>
                <p className="text-blue-600 text-sm">Cocina Tradicional</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Inicio</a>
              <a href="#menu" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Menú</a>
              <a href="#nosotros" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Nosotros</a>
              <a href="#contacto" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Contacto</a>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-blue-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#inicio" className="block py-2 text-blue-700 hover:text-blue-900">Inicio</a>
              <a href="#menu" className="block py-2 text-blue-700 hover:text-blue-900">Menú</a>
              <a href="#nosotros" className="block py-2 text-blue-700 hover:text-blue-900">Nosotros</a>
              <a href="#contacto" className="block py-2 text-blue-700 hover:text-blue-900">Contacto</a>
            </div>
          </div>
        )}
      </header>
  );
}