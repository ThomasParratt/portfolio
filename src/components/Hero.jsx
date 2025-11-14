import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import { Routes, Route, Link } from "react-router-dom"
import heroImage from '../assets/me.jpg'


export default function Hero() {
    return (
        <section className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Hi — I'm Tom.
                    <span className="block text-lg md:text-xl mt-4 font-medium text-gray-600">Software engineer & English teacher — I build playful web experiences.</span>
                </h1>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/projects" className="px-5 py-3 rounded-lg border">See my work</Link>
                    <Link to="/contact" className="px-5 py-3 rounded-lg bg-gray-900 text-white">Contact me</Link>
                </div>
                <div className="mt-8 flex justify-center">
                    <img src={heroImage} className="w-full max-w-lg mx-auto rounded-full" alt="Example" />
                </div>
            </div>
        </section>
    )
}