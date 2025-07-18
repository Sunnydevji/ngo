import React from "react";

function ContactMap() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.66372799314!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sWashington%20Ave%2C%20NY!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full rounded-none"
      ></iframe>
    </section>
  );
}

export default ContactMap;