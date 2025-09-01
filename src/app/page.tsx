'use client';

import Header from "@/components/Header";
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import GallerySection from '@/components/Gallery_Section';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import { format } from "path";
export default function RestauranteNicaragua() {
  return (
    <main>
      <style jsx  global>{`
        html {
          scroll-padding-top:80px; 
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* Menu */}
        <Menu />

        {/* About */}
        <About />

        {/* GallerySection */}
        <GallerySection />

        {/* Contact */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
