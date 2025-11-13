import React, { useState, useEffect } from 'react'


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
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                <div className="md:hidden">{/* mobile menu placeholder */}</div>
            </nav>
        </header>
    )
}