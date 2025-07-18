'use client'
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const slides = [
    {
        img: "/home-slide/slide1.jpg",
        quote: "Together we can make a difference.",
        title: "Empower Communities",
        desc: "Join us in supporting education, health, and sustainable development for all.",
    },
    {
        img: "/home-slide/slide2.jpg",
        quote: "Your kindness creates hope.",
        title: "Support & Care",
        desc: "Help us reach those in need and bring smiles to countless faces.",
    },
    {
        img: "/home-slide/slide3.jpg",
        quote: "Every donation counts.",
        title: "Change Lives",
        desc: "Be the reason someone believes in a better tomorrow.",
    },
];

export default function HomeCarousel() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const nextSlide = () => {
        setAnimating(true);
        setTimeout(() => {
            setCurrent((current + 1) % slides.length);
            setAnimating(false);
        }, 400);
    };

    const prevSlide = () => {
        setAnimating(true);
        setTimeout(() => {
            setCurrent((current - 1 + slides.length) % slides.length);
            setAnimating(false);
        }, 400);
    };

    return (
        <div className="w-full max-w-7xl mx-auto mt-24 mb-0 px-4 relative">
            {/* Carousel Images */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                {/* Decorative Frame Border */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                    <div className="h-full w-full rounded-2xl border-4 border-white"
                        style={{
                            boxShadow: "0 0 0 6px rgba(16,185,129,0.15), 0 0 0 12px rgba(59,130,246,0.10)"
                        }}
                    />
                </div>
                {/* Carousel Content */}
                <div
                    className={`transition-all duration-500 ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                >
                    <Image
                        src={slides[current].img}
                        alt={slides[current].title}
                        width={900}
                        height={600}
                        className="w-full h-[480px] object-cover"
                        priority
                    />
                    {/* Left Blur Overlay */}
                    <div className="absolute inset-y-0 left-0 w-full z-10 pointer-events-none">
                        <div
                            className="h-full w-full"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(16,185,129,0.75) 0%, rgba(250,204,21,0.55) 40%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 100%)",
                                backdropFilter: "blur(1px)"
                            }}
                        />
                    </div>
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-8 py-6 z-20">
                        <span className="text-sm md:text-base text-yellow-300 font-semibold mb-2 animate-fade-in">
                            {slides[current].quote}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-slide-up">
                            {slides[current].title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-100 mb-4 max-w-lg animate-fade-in">
                            {slides[current].desc}
                        </p>
                        <button className="group flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-400 text-white font-bold shadow-lg transition-all duration-300 hover:bg-yellow-500 overflow-hidden">
                            <span className="relative z-10">Donate Now</span>
                            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-2">
                                <FaArrowRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
                {/* Indicators & Arrows */}
                <div className="absolute bg-white p-4 rounded-tr-xl rounded-tl-xl bottom-0 left-[43%] rigth-[55%]  flex justify-center items-center gap-3 z-40">
                    <button
                        className="bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow transition"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition-all duration-300 ${current === idx ? "bg-yellow-400 scale-125" : "bg-white/60"
                                }`}
                            onClick={() => {
                                setAnimating(true);
                                setTimeout(() => {
                                    setCurrent(idx);
                                    setAnimating(false);
                                }, 400);
                            }}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                    <button
                        className="bg-white/80 hover:bg-yellow-400 text-gray-900 rounded-full p-2 shadow transition"
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
            {/* Animations */}
            <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        .animate-slide-up {
          animation: slideUp 0.7s;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
        </div>
    );
}