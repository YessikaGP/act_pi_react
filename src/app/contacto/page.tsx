"use client";

import { useState } from "react";

export default function ContactosPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensaje enviado:", form);
    alert("Tu mensaje ha sido enviado. ¡Gracias por contactarnos!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-black">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        📞 Contáctanos
      </h1>

      {/* Redes sociales */}
      <div className="flex gap-6 mb-8">
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          className="text-green-600 font-semibold hover:underline"
        >
          WhatsApp
        </a>
        <a
          href="https://facebook.com/tuPagina"
          target="_blank"
          className="text-blue-600 font-semibold hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com/tuPagina"
          target="_blank"
          className="text-pink-600 font-semibold hover:underline"
        >
          Instagram
        </a>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-black"
      >
        <div className="mb-4">
          <label className="block font-medium mb-1 text-black">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-black">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1 text-black">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded-lg text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

// prueba de commit
