import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/about-bg.jpg"
        alt="About Us"
        fill
        className="object-cover w-full h-full"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Title & Breadcrumb */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg">
          About Us
        </h1>
        <div className="flex items-center gap-2 bg-gray-900/70 px-5 py-2 rounded-full text-white text-base font-medium shadow">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <span className="mx-1">»</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
}