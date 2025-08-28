import Link from 'next/link'
import { products } from '@/lib/products'
import ProductCard from '@/components/features/ProductCard'

export default function HomePage() {
  const featured = products.slice(0, 3)
  return (
    <section>
      <header className="py-8">
        <h1 className="text-3xl font-bold">Repuestos Bicicletas</h1>
        <p className="mt-2 text-gray-600">Tienda sencilla para comprar repuestos y accesorios.</p>
      </header>

      <h2 className="text-2xl font-semibold mb-4">Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-6">
        <Link href="/products" className="underline">Ver todos los productos</Link>
      </div>
    </section>
  )
}
