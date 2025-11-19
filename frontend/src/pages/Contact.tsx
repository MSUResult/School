"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMsg(data.message);
        setForm({ name: "", email: "", phone: "", message: "" }); // Clear all fields
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setResponseMsg(
        error.message || "Failed to send message. Please try again."
      );
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white overflow-hidden flex items-center justify-center p-6 md:p-12">
        {/* Floating WhatsApp Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/917618550475?text=Hello%20Shivansh,%20I%20saw%20your%20website."
          target="_blank"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-green-600 transition font-semibold"
        >
          <span>WhatsApp</span>
        </motion.a>

        {/* Main Content Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT COLUMN: Info & Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Developer Profile Badge */}
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-purple-100 shadow-sm w-fit">
              <img
                src="/useNOW.png"
                alt="Shivansh"
                onError={(e) =>
                  (e.currentTarget.src = "https://via.placeholder.com/64")
                }
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Shivansh</h3>
                <p className="text-xs text-purple-600 font-medium">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>

            {/* Greeting */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Let’s Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Extraordinary.
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed font-light">
                Hello Sir, I am{" "}
                <span className="font-semibold text-purple-700">Shivansh</span>.
                <br />
                “The internet is the busiest business space in this universe.
                Stand out, and you will attract opportunities beyond
                imagination.”
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Powered By
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio Link */}
            <div className="pt-4">
              <a
                href="https://shivansh-webdev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-purple-600 transition group"
              >
                Visit My Portfolio
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-white/50"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send me a message
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none"
                    placeholder="Shivansh Singh"
                  />
                </div>

                {/* Modified: Phone and Email side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none"
                      placeholder="+91 98765..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can I help?
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-4 rounded-xl text-lg font-bold shadow-lg transition flex items-center justify-center
                    ${
                      status === "loading"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/30"
                    }`}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </motion.button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center font-medium bg-green-50 p-3 rounded-lg border border-green-100"
                    >
                      {responseMsg || "Message sent successfully!"}
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-center font-medium bg-red-50 p-3 rounded-lg border border-red-100"
                    >
                      {responseMsg}
                    </motion.p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;
