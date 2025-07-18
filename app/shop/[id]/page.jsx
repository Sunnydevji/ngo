import React from "react";

// Dummy products data (same as ShopGrid)
const products = [
  { id: 1, name: 'T-Shirt', category: 'Men', price: '$20', image: 'https://images.pexels.com/photos/33051747/pexels-photo-33051747.jpeg' },
  { id: 2, name: 'Dress', category: 'Women', price: '$35', image: 'https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg'},
  { id: 3, name: 'Jacket', category: 'Clothing', price: '$50', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg' },
  { id: 4, name: 'Vase', category: 'Decorations', price: '$15', image: 'https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg' },
  // Add more products as needed
];

export default function ProductPage({ params }) {
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Not Found</h2>
        <p className="text-gray-500">Sorry, we couldn't find that product.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 py-8 mt-20 px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-yellow-100 via-green-100 to-white p-10">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-xl w-full h-[340px] object-cover border border-gray-200"
          />
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center p-10">
          <span className="inline-block bg-green-600/80 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 w-fit shadow">
            {product.category}
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600 text-base mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-yellow-500">{product.price}</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">{product.oldPrice}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-semibold"
            />
          </div>
          <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-green-600 hover:from-green-700 hover:to-yellow-400 text-white font-bold text-lg shadow-xl transition duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 13M7 13V6h13"></path></svg>
            Add to Cart
          </button>
          <div className="mt-6 text-sm text-gray-500">
            <span>Free shipping on orders over $50</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    // Add more IDs if you add more products
  ];
}