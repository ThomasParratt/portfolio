import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import heroImage from '../assets/me.jpg'
import LinkedInLogo from '../assets/LinkedIn_logo.png'
import GitHubLogo from '../assets/GitHub_logo.svg'
import { useNavigate } from "react-router-dom";
import PongGameFace from '../games/PongGameFace';
import { useState, useEffect } from 'react';


export default function Hero() {
    //const navigate = useNavigate();
    const [showPong, setShowPong] = useState(false);
    const location = useLocation();

    // Hide the Pong game whenever the route changes
    useEffect(() => {
        setShowPong(false);
    }, [location]);

    return (
        <section className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl text-sky-700 font-bold">
                    Hi, I'm Tom.
                    <span className="block text-lg md:text-xl mt-4 font-medium text-orange-600 max-w-[600px] mx-auto">
                        Software developer — building my foundation through meaningful, user-focused projects.
                    </span>
                </h1>
                <div className="mt-8 flex justify-center gap-4">
                    <img 
                        src={heroImage} 
                        alt="Tom" 
                        className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white rounded-2xl shadow-xl cursor-pointer"
                        //onClick={() => navigate("/pongFace")}
                        onClick={() => setShowPong(true)}
                    />
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/projects" className="px-5 py-3 rounded-2xl border-4 border-white bg-sky-700 text-white shadow-xl font-bold">See my work</Link>
                    <Link to="/contact" className="px-5 py-3 rounded-2xl border-4 border-white bg-sky-700 text-white shadow-xl font-bold">Contact</Link>
                </div>
            </div>
            {/* Pong overlay */}
            {showPong && (
                <div className="mt-8 absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <PongGameFace />
                </div>
            )}
        </section>
    );
}