import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Address & Emergency */}
        <div className="md:col-span-4 flex flex-col md:flex-row justify-between items-center bg-green-700 rounded-xl py-4 px-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 rounded-full p-2"><FaEnvelope /></span>
            <span className="font-bold">info@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 rounded-full p-2"><FaPhone /></span>
            <span className="font-bold">+88 0123 654 99</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 rounded-full p-2"><FaEnvelope /></span>
            <span className="font-bold">4648 Rocky Road Philadelphia PA, 1920</span>
          </div>
        </div>
        {/* Footer Main */}
        <div>
          <h3 className="font-extrabold text-xl mb-2 flex items-center gap-2">
            <span className="text-orange-500"><FaEnvelope /></span>
            Enira
          </h3>
          <p className="text-gray-200 mb-4 text-sm">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition"><FaFacebookF /></a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition"><FaTwitter /></a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 border-b border-orange-500 pb-1">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-500 transition">Our Services</a></li>
            <li><a href="/blogs" className="hover:text-orange-500 transition">Our Blogs</a></li>
            <li><a href="/faq" className="hover:text-orange-500 transition">FAQ's</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 border-b border-orange-500 pb-1">Recent Posts</h4>
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <img src="/home-slide/slide1.jpg" alt="Post" className="w-10 h-10 rounded object-cover" />
              <div>
                <div className="text-xs text-gray-400">May 12, 2025</div>
                <div className="text-sm font-semibold">There are many various passages of</div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/home-slide/slide3.jpg" alt="Post" className="w-10 h-10 rounded object-cover" />
              <div>
                <div className="text-xs text-gray-400">May 12, 2025</div>
                <div className="text-sm font-semibold">There are many various passages of</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2 border-b border-orange-500 pb-1">Contact Us</h4>
          <div className="mb-2 text-sm">
            <div className="flex items-center gap-2"><FaEnvelope /> info@example.com</div>
            <div className="flex items-center gap-2"><FaPhone /> 123-456-7890</div>
          </div>
          <form className="flex gap-2">
            <input type="email" placeholder="Your Email Address" className="px-3 py-2 rounded-l bg-white text-gray-900 text-sm outline-none" />
            <button type="submit" className="bg-orange-500 px-4 rounded-r text-white font-bold"><FaEnvelope /></button>
          </form>
          <div className="mt-2 text-xs">
            <input type="checkbox" id="privacy" className="mr-1" />
            <label htmlFor="privacy">I agree with the <a href="#" className="underline text-orange-500">Privacy Policy</a></label>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-500 mt-10 pt-4 text-center text-xs text-gray-300">
        © 2025 Enira. All rights reserved &nbsp; | &nbsp; <a href="#" className="text-orange-500">Terms & Conditions</a> &nbsp; | &nbsp; <a href="#" className="text-orange-500">Privacy Policy</a>
      </div>
    </footer>
  );
}