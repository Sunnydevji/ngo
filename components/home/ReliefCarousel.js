'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const reliefItems = [
  {
    id: 1,
    img: "/relief/food.jpg",
    title: "Food Relief",
    desc: "Nutritious meals for families in need.",
    link: "/shop/food-relief",
  },
  {
    id: 2,
    img: "/relief/medicine.jpg",
    title: "Medical Aid",
    desc: "Essential medicines and health kits.",
    link: "/shop/medical-aid",
  },
  {
    id: 3,
    img: "/relief/water.jpg",
    title: "Clean Water",
    desc: "Safe drinking water for communities.",
    link: "/shop/clean-water",
  },
  {
    id: 4,
    img: "/relief/shelter.jpg",
    title: "Shelter Kits",
    desc: "Temporary shelters for disaster relief.",
    link: "/shop/shelter-kits",
  },
];

export default function ReliefCarousel() {
  const [current, setCurrent] = useState(0);
  const cardsToShow = 3;

  // Calculate the indexes of the cards to show
  const getVisibleCards = () => {
    const items = [];
    for (let i = 0; i < cardsToShow; i++) {
      items.push(reliefItems[(current + i) % reliefItems.length]);
    }
    return items;
  };

  const next = () => {
    setCurrent((current + 1) % reliefItems.length);
  };
  const prev = () => {
    setCurrent((current - 1 + reliefItems.length) % reliefItems.length);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-yellow-50 via-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 drop-shadow-lg">
          Special Products Programs
        </h2>
        <div className="relative flex flex-col items-center min-h-[400px]">
          {/* Horizontal Carousel Cards */}
          <div className="w-full flex items-center justify-center gap-8 overflow-x-auto pb-4">
            {getVisibleCards().map((item, idx) => (
              <Link
                href={item.link}
                key={item.id}
                className="group w-full max-w-xs"
              >
                <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-yellow-100 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-yellow-200 hover:border-yellow-400 cursor-pointer">
                  {/* Decorative gradient ring */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 via-blue-200 to-green-200 opacity-30 blur-2xl pointer-events-none" />
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-extrabold text-xl mb-2 text-yellow-500 group-hover:text-blue-500 transition-colors duration-300 drop-shadow">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                    <span className="inline-block mt-2 px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-xs shadow group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                      View Details
                    </span>
                  </div>
                  {/* Animated underline on hover */}
                  <span className="block h-1 w-10 mx-auto rounded bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </div>
              </Link>
            ))}
          </div>
          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow transition"
              onClick={prev}
              aria-label="Previous"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {reliefItems.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition-all duration-300 ${current === idx ? "bg-yellow-400 scale-125" : "bg-white/60"}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <button
              className="bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow transition"
              onClick={next}
              aria-label="Next"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}