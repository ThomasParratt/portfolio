import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)


    useEffect(()=>{
        function onScroll() {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <header className={`fixed w-full z-30 transition-all ${scrolled? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
            <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="text-xl font-semibold">Tom</div>
                    <ul className="hidden md:flex gap-6 items-center text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                <div className="md:hidden">{/* mobile menu placeholder */}</div>
            </nav>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </header>
    )
}

/*export default function App() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}*/