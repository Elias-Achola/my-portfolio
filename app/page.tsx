// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 p-6">
        <h1 className="text-2xl font-bold">Achola Portfolio</h1>
      </nav>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi! I’m Achola, a front-end & full-stack developer offering freelance services. I specialize in creating dynamic, modern web applications.
        </p>
      </section>

      {/* Projects Section (Placeholder) */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900 rounded-xl flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="mb-4">Exciting projects will appear here soon!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p>Email: <a href="mailto:youremail@example.com" className="underline">eliasachola2007@gmail.com</a></p>
        <p>GitHub: Elias-Achola</p>
        <p>Phone: +254759020828</p>
      </section>

      {/* Footer */}
<footer className="bg-gray-900 py-8 px-6 mt-16 text-center">
  <p className="mb-4">Connect with me:</p>
  <div className="flex justify-center space-x-6">
    <a href="https://github.com/Elias-Achola" target="_blank" className="text-blue-400 underline">
      GitHub
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-400 underline">
      LinkedIn
    </a>
    <a href="mailto:eliasachola2007@gmail.com" className="text-blue-400 underline">
      Email
    </a>
  </div>
  <p className="mt-6 text-gray-400 text-sm">© {new Date().getFullYear()} Achola</p>
</footer>
    </main>
  );
}