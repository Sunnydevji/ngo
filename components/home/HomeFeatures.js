import { FaBookOpen, FaHeartbeat, FaHandsHelping, FaTint } from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen size={36} className="text-blue-500 drop-shadow" />,
    title: "Education Support",
    desc: "Empowering children and adults through access to quality education and resources.",
  },
  {
    icon: <FaHeartbeat size={36} className="text-green-500 drop-shadow" />,
    title: "Healthcare Initiatives",
    desc: "Providing essential medical care and health awareness for underserved communities.",
  },
  {
    icon: <FaHandsHelping size={36} className="text-yellow-500 drop-shadow" />,
    title: "Livelihood Programs",
    desc: "Creating opportunities for sustainable income and skill development.",
  },
  {
    icon: <FaTint size={36} className="text-cyan-500 drop-shadow" />,
    title: "Access to Water",
    desc: "Ensuring clean and safe water for families and villages.",
  },
];

export default function HomeFeatures() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-16 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-gray-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-200 hover:border-yellow-400 group overflow-hidden"
        >
          {/* Decorative gradient ring */}
          <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 via-blue-200 to-green-200 opacity-30 blur-2xl pointer-events-none" />
          {/* Animated icon circle */}
          <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-100 via-blue-100 to-green-100 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-yellow-200">
            {f.icon}
          </div>
          <h3 className="font-extrabold text-lg mb-2 text-gray-900 tracking-tight group-hover:text-yellow-500 transition-colors duration-300 drop-shadow">{f.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{f.desc}</p>
          {/* Animated underline on hover */}
          <span className="block h-1 w-10 mx-auto rounded bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </div>
      ))}
    </div>
  );
}