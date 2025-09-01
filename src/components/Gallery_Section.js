import Image from "next/image"

export default function GallerySection () {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Galería de Platillos</h2>
          <p className="text-xl text-gray-600">Algunos de nuestros platos más populares</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src={`/images/plato${item}.jpg`}
                  alt={`Platillo ${item}`}
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-80">
                  <span className="text-white font-semibold">Ver Platillo</span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}