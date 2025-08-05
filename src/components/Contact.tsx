
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="lg:min-h-screen bg-[#0D1117] text-white px-4 py-12 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-6 text-center mt-8">Contact Me</h2>
                <div className="w-40 h-1 rounded-full bg-yellow-500 mb-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#161B22] p-8 rounded-2xl shadow-2xl"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="from_name">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="reply_to">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-[#0D1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-2 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center pt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
