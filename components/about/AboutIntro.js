import Image from "next/image";
import { FaHeart, FaUsers, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function AboutIntro() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Left: Heart/Experience/Images */}
        <div className="relative flex items-center justify-center">
          {/* Heart shape background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/about-heart.png"
              alt="Heart"
              width={420}
              height={420}
              className="w-[340px] md:w-[420px] h-auto"
              priority
            />
          </div>
          {/* Donation image */}
          {/* <div className="relative z-10">
            <Image
              src="/about-donation.jpg"
              alt="Donation"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg absolute top-8 left-0"
            />
            <Image
              src="/about-helping.jpg"
              alt="Helping"
              width={220}
              height={220}
              className="rounded-xl shadow-xl"
            />
          </div> */}
        </div>
        {/* Right: Text Content */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaHeart className="text-green-500" />
            <span className="text-green-500 font-bold">About US</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Helping Each Other can Make World Better
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit The aspernatur aut odit aut fugit, sed quia consequuntur. Nonprofits around the world apply and join us to access more funding.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 font-bold text-green-600">
                <FaUsers />
                Start Helping Team
              </div>
              <div className="text-gray-500 text-sm">There are many variations of solve</div>
            </div>
            <div className="flex -space-x-4">
              <Image src="/about-people.jpg" alt="Team" width={158} height={78} className="rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-yellow-400 text-white font-bold shadow hover:bg-yellow-500 transition text-base">
              Explore More <FaArrowRight />
            </button>
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaPhoneAlt className="text-green-500" />
              Call Any Time
              <span className="ml-2 text-gray-900 font-bold">+61 2345 678 990</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}