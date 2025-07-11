// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_3e2u1y8",    // Your actual service ID
        "template_czb1405",   // Your actual template ID
        form.current,
        "f9oklXEMBP75n1X7Y"   // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white rounded-lg shadow-lg p-6 space-y-6 w-full max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-blue-800">Send Us a Message</h3>

      {/* Hidden Subject Field */}
      <input type="hidden" name="subject" value="Contact Us Form" />

      {/* Name and Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone and Service */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="service"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Service</option>
          <option value="web-development">Web Development</option>
          <option value="seo">SEO Optimization</option>
          <option value="branding">Branding</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Company Name */}
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Message */}
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status && (
        <p className="text-sm text-center text-gray-700 font-medium">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
