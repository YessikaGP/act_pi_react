'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full mb-3">
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} className="rounded" />
        </div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
        </div>
      </Link>
    </article>
  )
}
