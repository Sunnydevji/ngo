'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const categories = ['Men', 'Women', 'Clothing', 'Decorations'];

const products = [
  { id: 1, name: 'T-Shirt', category: 'Men', price: '$20', image: 'https://images.pexels.com/photos/33051747/pexels-photo-33051747.jpeg' },
  { id: 2, name: 'Dress', category: 'Women', price: '$35', image: 'https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg'},
  { id: 3, name: 'Jacket', category: 'Clothing', price: '$50', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg' },
  { id: 4, name: 'Vase', category: 'Decorations', price: '$15', image: 'https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg' },
  // Add more products as needed
];

export default function ShopGrid() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="min-w-[220px] border-r border-gray-200 bg-white p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Categories</h3>
        <ul className="space-y-4">
          {categories.map(cat => (
            <li key={cat}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-green-100 transition font-medium text-gray-700">
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      {/* Product Grid */}
      <main className="flex-1 py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className={`group relative bg-green-600/70 hover:bg-yellow-400/70 transition-colors border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-100 shadow"
              />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
              <p className="text-sm font-medium text-green-800 mb-1">{product.category}</p>
              <p className="text-base font-bold text-gray-700 mb-4">{product.price}</p>
              <Link href={`/shop/${product.id}`}>
                <button className="mt-auto px-5 py-2 rounded-lg bg-yellow-500 hover:bg-green-700 text-white font-semibold shadow transition w-full">
                  Add to Cart
                </button>
              </Link>
              {/* Card hover effect */}
              <span
                className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-200 ${
                  hoveredId === product.id ? 'ring-4 ring-yellow-400/70' : 'ring-0'
                }`}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}