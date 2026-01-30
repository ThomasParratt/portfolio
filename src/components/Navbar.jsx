import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false) // mobile menu state

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`fixed w-full z-30 transition-all ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
            <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="text-xl font-semibold">
                    <Link to="/">Thomas Parratt</Link>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-6 items-center text-sm">
                    <li><Link to="/" className="hover:underline text-orange-600 text-lg font-semibold">Home</Link></li>
                    <li><Link to="/about" className="hover:underline text-orange-600 text-lg font-semibold">About</Link></li>
                    <li><Link to="/projects" className="hover:underline text-orange-600 text-lg font-semibold">Projects</Link></li>
                </ul>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {/* Hamburger icon */}
                        <div className="w-6 h-0.5 bg-orange-600 mb-1 transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)' }} />
                        <div className="w-6 h-0.5 bg-orange-600 mb-1 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
                        <div className="w-6 h-0.5 bg-orange-600 transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur shadow-md">
                    <ul className="flex flex-col gap-4 p-6 text-lg font-semibold text-orange-600">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    )
}
