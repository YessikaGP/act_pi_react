import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Bienvenido a <span className="text-yellow-300">BikeStore</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-8">
          Tu tienda online de bicicletas y accesorios. Encuentra tu compañera de
          ruta ideal.
        </p>
        <div className="flex gap-4">
          <Link
            href="/catalogo"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Ver Catálogo
          </Link>
          <Link
            href="/catalogo"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Contáctanos
          </Link>
        </div>
      </header>

      {/* Productos destacados */}
      <main className="px-8 py-16 flex flex-col gap-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-white">
          🚴‍♂️ Productos Destacados
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { id: 1, name: "Bicicleta Montaña", img: "/bike1.jpg" },
            { id: 2, name: "Bicicleta Urbana", img: "/bike2.jpg" },
            { id: 3, name: "Bicicleta de Ruta", img: "/bike3.jpg" },
            { id: 4, name: "Accesorios", img: "/bike4.jpg" },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg dark:text-white">
                  {item.name}
                </h3>
                <Link
                  href="/catalogo"
                  className="text-green-600 font-medium hover:underline"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Banner promocional */}
      <section className="bg-yellow-300 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          🚨 Oferta Especial 🚨
        </h2>
        <p className="mb-6 text-lg text-gray-800">
          Envío gratis en compras superiores a $500.000 COP
        </p>
        <Link
          href="/catalogo"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Comprar Ahora
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 flex flex-col sm:flex-row items-center justify-between px-8 bg-gray-200 dark:bg-gray-800">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} BikeStore. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/about" className="hover:underline text-gray-700 dark:text-gray-300">
            Sobre Nosotros
          </Link>
          <Link href="/catalogo" className="hover:underline text-gray-700 dark:text-gray-300">
            Catálogo
          </Link>
          <Link href="/contacto" className="hover:underline text-gray-700 dark:text-gray-300">
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
}
