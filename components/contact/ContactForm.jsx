import React from "react";

function ContactForm() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <span className="text-green-500 font-semibold mb-2 text-lg">Contact us</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Feel Free To Write Us Anytime
      </h2>
      <form className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="col-span-1 md:col-span-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900 font-medium"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="col-span-1 md:col-span-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900 font-medium"
        />
        <input
          type="text"
          placeholder="Subject"
          className="col-span-1 md:col-span-2 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900 font-medium"
        />
        <textarea
          rows={5}
          placeholder="Type your message"
          className="col-span-1 md:col-span-2 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-900 font-medium resize-none"
        />
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 hover:bg-orange-500 text-white font-semibold text-lg shadow transition"
          >
            <span>Get in Touch</span>
            <span className="inline-block rotate-180">&#10148;</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;