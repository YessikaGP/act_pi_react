'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/products'

export default function ProductsGridClient({ initialProducts = [] as Product[] }) {
  const [query, setQuery] = useState('')

  const filtered = initialProducts.filter((p) => {
    const q = query.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q)
    )
  })

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o categoría..."
          className="flex-1 border rounded px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-4 text-gray-600">No se encontraron productos.</p>}
    </div>
  )
}
