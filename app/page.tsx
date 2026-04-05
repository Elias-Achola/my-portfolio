// app/page.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";   // Only keeping ArrowRight for now

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Achola Elias</h1>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
              Based in Nairobi, Kenya 🇰🇪
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
              Hi, I&apos;m <span className="text-orange-400">Achola Elias</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-zinc-400 mb-8">
              Frontend Developer crafting <span className="text-white">beautiful</span> and{" "}
              <span className="text-white">interactive</span> web experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-2xl transition-all"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 font-medium px-8 py-4 rounded-2xl transition-all"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Hi! I’m Achola, a passionate front-end &amp; full-stack developer based in Nairobi. 
            I specialize in creating dynamic, modern web applications that are not only functional 
            but also beautiful and user-friendly. 
            I love turning ideas into smooth digital experiences.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION - Placeholder for your 3 projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-zinc-400 text-center mb-12">Here are some of the things I&apos;ve built</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace these 3 cards with your real projects later */}
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all"
              >
                <div className="h-56 bg-zinc-800 flex items-center justify-center text-6xl">
                  🖼️
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">Project {i}</h3>
                  <p className="text-zinc-400 mb-6">Short description of this project goes here...</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs px-3 py-1 bg-zinc-800 rounded-full">Next.js</span>
                    <span className="text-xs px-3 py-1 bg-zinc-800 rounded-full">Tailwind</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-orange-400 hover:underline">Live Demo →</a>
                    <a href="#" className="text-orange-400 hover:underline">GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-zinc-400 mb-12">Open to freelance opportunities and collaborations</p>

          <div className="space-y-6 text-left max-w-md mx-auto">
            <p><strong>Email:</strong> <a href="mailto:eliasachola2007@gmail.com" className="text-orange-400 underline">eliasachola2007@gmail.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Elias-Achola" target="_blank" className="text-orange-400 underline">Elias-Achola</a></p>
            <p><strong>Phone:</strong> +254 759 020 828</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Achola Elias • Made with ❤️ in Nairobi</p>
      </footer>
    </main>
  );
}