import Image from "next/image";
import Link from "next/link";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Left: Image/Post */}
      <div className="flex justify-center items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/60 bg-white">
          <Image
            src="/home-heart.jpg"
            alt="Helping Hands"
            width={420}
            height={420}
            className="object-cover w-full h-[340px] md:h-[420px] scale-105 transition-transform duration-500"
            priority
          />
          {/* Decorative gradient ring */}
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-yellow-200 opacity-40 blur-2xl pointer-events-none" />
          {/* Heart pulse animation */}
          <div className="absolute bottom-6 p-2 rounded-2xl bg-green-700/90 right-6 flex items-center gap-2">
            <span className="animate-pulse text-red-400 text-3xl">❤️</span>
            <span className="font-bold text-yellow-500 text-lg">Give Hope</span>
          </div>
        </div>
      </div>
      {/* Right: Text Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow-lg">
          About Us
        </h2>
        <p className="text-2xl font-bold text-yellow-500 mb-4 italic">
          We Believe This Life's About Give For Poor People.
        </p>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          <span className="font-semibold text-blue-500">Dicta sunt explicabo.</span> Nemo enim ipsam voluptatem quia voluptas sit The aspernatur aut odit aut fugit, sed quia consequuntur.{" "}
          <span className="text-green-500 font-semibold">
            Nonprofits around the world apply and join us to access more funding.
          </span>
        </p>
        <div className="space-y-7 mb-10">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-500 shadow-lg border-2 border-yellow-300 animate-bounce">
              <FaBullseye size={28} />
            </span>
            <div>
              <h4 className="font-bold text-xl text-gray-900 mb-1">Our Mission</h4>
              <p className="text-gray-600 text-base">
                The World Apply And Join us to Access Funding.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-500 shadow-lg border-2 border-blue-300 animate-bounce">
              <FaEye size={28} />
            </span>
            <div>
              <h4 className="font-bold text-xl text-gray-900 mb-1">Our Vision</h4>
              <p className="text-gray-600 text-base">
                The World Apply And Join us to Access Funding.
              </p>
            </div>
          </div>
        </div>
        {/* Slideable Explore More Button */}
        
        <Link href="/about">
        <button  className="group mt-2 px-8 py-3 rounded-full bg-yellow-400 text-white font-extrabold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg flex items-center gap-3 overflow-hidden relative cursor-pointer">
          <span className="relative z-10">Explore More</span>
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
            <FaArrowRight size={20} className="group-hover:text-white text-yellow-900" />
          </span>
        </button>
        </Link>
      </div>
    </section>
  );
}