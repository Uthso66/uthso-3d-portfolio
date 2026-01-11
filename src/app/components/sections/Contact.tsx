"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Code2, Send, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Formspree or similar
    window.location.href = `mailto:tarikulislam.uthso.3966@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href="mailto:tarikulislam.uthso.3966@gmail.com"
                    className="flex items-start gap-4 text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Email
                      </div>
                      <div className="text-sm mt-1">
                        tarikulislam.uthso.3966@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Uthso66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        GitHub
                      </div>
                      <div className="text-sm mt-1">github.com/Uthso66</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/tarikul-islam-uthso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        LinkedIn
                      </div>
                      <div className="text-sm mt-1">
                        linkedin.com/in/tarikul-islam-uthso
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://codeforces.com/profile/tarikul_uthso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-400 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Codeforces
                      </div>
                      <div className="text-sm mt-1">
                        codeforces.com/profile/tarikul_uthso
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-gray-400">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">
                        Location
                      </div>
                      <div className="text-sm mt-1">Dhaka, Bangladesh</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Open to Remote / Relocation (EU & Asia)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <h4 className="text-lg font-bold text-white">
                    Current Availability
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-sm text-gray-400">
                      Open to full-time opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-sm text-gray-400">
                      Available for freelance projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-sm text-gray-400">
                      Ready to start immediately
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Project Inquiry / Job Opportunity"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Hello! I'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
