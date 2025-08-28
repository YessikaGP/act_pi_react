import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Repuestos Bicicletas</Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/products" className="hover:underline">Productos</Link>
          <Link href="/cart" className="hover:underline">Carrito</Link>
        </nav>
      </div>
    </header>
  )
}
