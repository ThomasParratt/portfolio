import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import { Routes, Route, Link } from "react-router-dom"
import heroImage from '../assets/me.jpg'
import LinkedInLogo from '../assets/LinkedIn_logo.png'
import GitHubLogo from '../assets/GitHub_logo.svg'
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I'm Tom.
                    <span className="block text-lg md:text-xl mt-4 font-medium text-gray-600 max-w-[600px] mx-auto">
                        Software developer — building my foundation through meaningful, user-focused projects.
                    </span>
                </h1>
                <div className="mt-8 flex justify-center gap-4">
                    <img 
                        src={heroImage} 
                        alt="Tom" 
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-300 shadow-lg cursor-pointer"
                        onClick={() => navigate("/pong")}
                    />
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/projects" className="px-5 py-3 rounded-lg border">See my work</Link>
                    <Link to="/contact" className="px-5 py-3 rounded-lg bg-gray-900 text-white">Contact</Link>
                </div>
            </div>
        </section>
    );
}