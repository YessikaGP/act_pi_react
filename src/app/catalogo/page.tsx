"use client";

import { useState } from "react";
import Image from "next/image";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  
  imagen: string;
  caracteristicas: string[];
};

export default function CatalogoPage() {
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Producto | null>(null);

  const [secciones] = useState([
    {
      id: "montana",
      titulo: "🚵‍♂️ Bicicletas de Montaña",
      productos: [
        {
          id: 1,
          nombre: "Bicicleta Montaña Pro",
          descripcion: "Suspensión doble, marco de aluminio ultraligero.",
          precio: 3500000,
          imagen: "/bike1.jpg",
          caracteristicas: [
            "Marco de aluminio ligero",
            "Suspensión delantera y trasera",
            "21 velocidades Shimano",
            "Rines reforzados para terrenos difíciles",
          ],
        },
        {
          id: 2,
          nombre: "Bicicleta Montaña Sport",
          descripcion: "Perfecta para principiantes en senderos.",
          precio: 2200000,
          imagen: "/bike2.jpg",
          caracteristicas: [
            "Suspensión delantera",
            "Frenos de disco mecánicos",
            "Cambio de 18 velocidades",
            "Asiento ergonómico",
          ],
        },
        {
          id: 3,
          nombre: "Bicicleta Montaña Xtreme",
          descripcion: "Rendimiento extremo en terrenos difíciles.",
          precio: 5000000,
          imagen: "/bike3.jpg",
          caracteristicas: [
            "Cuadro de fibra de carbono",
            "Suspensión hidráulica",
            "Frenos de disco hidráulicos",
            "Ruedas de 29 pulgadas",
          ],
        },
        {
          id: 4,
          nombre: "Bicicleta Montaña Light",
          descripcion: "Ligera y resistente para paseos largos.",
          precio: 2800000,
          imagen: "/bike4.jpg",
          caracteristicas: [
            "Peso reducido",
            "Suspensión delantera ajustable",
            "Sistema de frenos V-brake",
            "Diseño aerodinámico",
          ],
        },
      ],
    },
    {
      id: "urbana",
      titulo: "🚲 Bicicletas Urbanas",
      productos: [
        {
          id: 5,
          nombre: "Bicicleta Urbana Classic",
          descripcion: "Diseño retro con canasta incluida.",
          precio: 1800000,
          imagen: "/bike5.jpg",
          caracteristicas: [
            "Canasta delantera amplia",
            "Diseño vintage",
            "Sillín acolchado",
            "Ideal para ciudad",
          ],
        },
        {
          id: 6,
          nombre: "Bicicleta Urbana Eco",
          descripcion: "Ligera, cómoda y eficiente para la ciudad.",
          precio: 2000000,
          imagen: "/bike6.jpg",
          caracteristicas: [
            "Marco de acero liviano",
            "Guardabarros incluidos",
            "Sistema de 7 velocidades",
            "Frenos de disco",
          ],
        },
        {
          id: 7,
          nombre: "Bicicleta Urbana Compact",
          descripcion: "Ideal para espacios reducidos, plegable.",
          precio: 2500000,
          imagen: "/bike7.jpg",
          caracteristicas: [
            "Sistema plegable en segundos",
            "Ruedas de 20 pulgadas",
            "Marco resistente",
            "Portátil y ligera",
          ],
        },
        {
          id: 8,
          nombre: "Bicicleta Urbana Confort",
          descripcion: "Sillín ergonómico y diseño elegante.",
          precio: 3000000,
          imagen: "/bike8.jpg",
          caracteristicas: [
            "Manubrio ajustable",
            "Diseño estilizado",
            "Frenos V-brake",
            "Sillín premium",
          ],
        },
      ],
    },
    {
      id: "ruta",
      titulo: "🚴 Bicicletas de Ruta",
      productos: [
        {
          id: 9,
          nombre: "Bicicleta Ruta SpeedX",
          descripcion: "Ideal para largas distancias y gran velocidad.",
          precio: 4500000,
          imagen: "/bike9.jpg",
          caracteristicas: [
            "Marco aerodinámico",
            "24 velocidades Shimano",
            "Frenos de pinza",
            "Ruedas ultraligeras",
          ],
        },
        {
          id: 10,
          nombre: "Bicicleta Ruta Pro Carbon",
          descripcion: "Marco de fibra de carbono ultraligero.",
          precio: 7000000,
          imagen: "/bike10.jpg",
          caracteristicas: [
            "Fibra de carbono 100%",
            "Cambio electrónico",
            "Manubrio integrado",
            "Peso 7 kg",
          ],
        },
        {
          id: 11,
          nombre: "Bicicleta Ruta Aero",
          descripcion: "Optimizada para resistencia al viento.",
          precio: 6000000,
          imagen: "/bike11.jpg",
          caracteristicas: [
            "Diseño aerodinámico",
            "Ruedas de perfil alto",
            "Frenos de disco hidráulicos",
            "Sillín de competición",
          ],
        },
        {
          id: 12,
          nombre: "Bicicleta Ruta Endurance",
          descripcion: "Comodidad en recorridos largos.",
          precio: 5200000,
          imagen: "/bike12.jpg",
          caracteristicas: [
            "Geometría endurance",
            "Neumáticos anchos",
            "Manillar ergonómico",
            "Cuadro de aluminio reforzado",
          ],
        },
      ],
    },
    {
      id: "accesorios",
      titulo: "🛠 Accesorios",
      productos: [
        {
          id: 13,
          nombre: "Casco de Seguridad",
          descripcion: "Casco ligero y resistente certificado.",
          precio: 250000,
          imagen: "/bike13.jpg",
          caracteristicas: [
            "Certificación internacional",
            "Ventilación mejorada",
            "Ajuste ergonómico",
            "Material ultraligero",
          ],
        },
        {
          id: 14,
          nombre: "Kit de Luces LED",
          descripcion: "Luces delanteras y traseras USB recargables.",
          precio: 120000,
          imagen: "/bike14.jpg",
          caracteristicas: [
            "Batería recargable",
            "Resistentes al agua",
            "Alta luminosidad",
            "Fácil instalación",
          ],
        },
        {
          id: 15,
          nombre: "Guantes MTB",
          descripcion: "Protección y comodidad en cada ruta.",
          precio: 90000,
          imagen: "/bike15.jpg",
          caracteristicas: [
            "Material transpirable",
            "Refuerzo en la palma",
            "Ajuste de velcro",
            "Resistentes al desgaste",
          ],
        },
        {
          id: 16,
          nombre: "Candado Antirrobo",
          descripcion: "Sistema de seguridad reforzado.",
          precio: 150000,
          imagen: "/bike16.jpg",
          caracteristicas: [
            "Acero endurecido",
            "Llaves de seguridad",
            "Revestimiento plástico",
            "Compacto y fuerte",
          ],
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black dark:bg-gray-900 dark:text-white">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        🚴 Catálogo de Bicicletas y Accesorios
      </h1>

      {/* Navegación */}
      <nav className="flex justify-center gap-4 mb-10 flex-wrap">
        {secciones.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            {sec.titulo}
          </a>
        ))}
      </nav>

      {/* Secciones */}
      {secciones.map((sec) => (
        <section key={sec.id} id={sec.id} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {sec.titulo}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {sec.productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={400}
                  height={250}
                  className="w-full h-40 object-contain bg-black"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 flex-1">
                    {producto.descripcion}
                  </p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    ${producto.precio.toLocaleString("es-CO")}
                  </p>
                  <button
                    onClick={() => setProductoSeleccionado(producto)}
                    className="mt-auto bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition w-full"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Modal */}
      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              ✖
            </button>

            <Image
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              width={500}
              height={300}
              className="w-full h-56 object-contain bg-black rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">
              {productoSeleccionado.nombre}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {productoSeleccionado.descripcion}
            </p>

            {/* Características */}
            <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700 dark:text-gray-200">
              {productoSeleccionado.caracteristicas.map((car, i) => (
                <li key={i}>{car}</li>
              ))}
            </ul>

            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              ${productoSeleccionado.precio.toLocaleString("es-CO")}
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition w-full">
              Añadir al Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
