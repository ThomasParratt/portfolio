import React, { useState, useEffect } from 'react'
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
                <div className="text-xl font-semibold">Thomas Parratt</div>
                    <ul className="hidden md:flex gap-6 items-center text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                <div className="md:hidden">{/* mobile menu placeholder */}</div>
            </nav>
        </header>
    )
}