'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white scroll-smooth pt-16">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

// ================= Navbar =================
function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/70 backdrop-blur z-50 px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Achola Elias</h1>
      <div className="space-x-6 text-sm">
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Work</a>
        <a href="#contact" className="text-blue-400">Hire Me</a>
      </div>
    </nav>
  )
}

// ================= Hero =================
function Hero() {
  return (
    <section className="pt-32 px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        Frontend & Full-Stack Developer
      </motion.h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        I create sleek, responsive web apps and help businesses bring their ideas online.
      </p>
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-blue-600 rounded-xl transition-transform duration-200"
        >
          Hire Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border border-gray-700 rounded-xl transition-transform duration-200"
        >
          View Work
        </motion.button>
      </div>
    </section>
  )
}

// ================= Skills =================
function Skills() {
  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Marketing',
    'Databases',
  ]

  return (
    <section id="skills" className="px-8 py-24">
      <h3 className="text-3xl font-semibold mb-10">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div
            key={skill}
            className="p-4 bg-gray-900 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

// ================= Services =================
function Services() {
  return (
    <section id="services" className="px-8 py-24 bg-gray-900">
      <h3 className="text-3xl font-semibold mb-10">Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="Web Applications"
          desc="Building fast and interactive web applications using modern tech."
        />
        <ServiceCard
          title="Full-Stack Development"
          desc="End-to-end solutions including backend APIs, authentication, and databases."
        />
        <ServiceCard
          title="Freelance Projects"
          desc="Creating custom websites and maintaining client projects."
        />
      </div>
    </section>
  )
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-800 rounded-2xl transition-transform duration-200"
    >
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  )
}

// ================= Projects =================
function Projects() {
  const projects = [
    { name: 'Coming Soon', tech: 'Portfolio in Progress' },
    { name: 'Coming Soon', tech: 'More Projects Coming' },
  ]

  return (
    <section id="projects" className="px-8 py-24">
      <h3 className="text-3xl font-semibold mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.name + index} // ✅ Unique key now
            className="p-6 bg-gray-900 rounded-xl flex flex-col justify-between"
          >
            <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-400 mb-4">{project.tech}</p>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 rounded-lg text-sm text-white text-center transition-colors duration-200 hover:bg-blue-500"
            >
              Contact Me About This
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

<section id="contact" className="py-16 bg-gray-900 text-white">
  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
  <p>Email: <a href="mailto:eliasachola2007@gmail.com" className="underline">eliasachola2007@gmail.com</a></p>
  <p>Phone: +254 759 020 828</p>
</section>

// ================= Contact =================
function Contact() {
  return (
    <section id="contact" className="px-8 py-24 bg-gray-900">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      <form className="max-w-md space-y-4">
        <input
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="Your Email"
        />
        <textarea
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="Your Message"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-blue-600 rounded-xl transition-transform duration-200"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  )
}

// ================= Footer =================
function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 space-x-4">
      © {new Date().getFullYear()} Achola Elias. All rights reserved.
      <div className="mt-2">
        <a href="https://github.com/YourUsername" target="_blank" rel="noreferrer" className="mx-2 hover:text-white">
          GitHub
        </a>
        <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noreferrer" className="mx-2 hover:text-white">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}