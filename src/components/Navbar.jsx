import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


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
                <div className="text-xl font-semibold"><Link to="/">Thomas Parratt</Link></div>
                    <ul className="hidden md:flex gap-6 items-center text-sm">
                        <li><Link to="/" className="hover:underline text-orange-600 text-lg font-semibold">Home</Link></li>
                        <li><Link to="/projects" className="hover:underline text-orange-600 text-lg font-semibold">Projects</Link></li>
                        <li><Link to="/contact" className="hover:underline text-orange-600 text-lg font-semibold">Contact</Link></li>
                    </ul>
                <div className="md:hidden">{/* mobile menu? */}</div>
            </nav>
        </header>
    )
}