import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import heroImage from '../assets/me.jpg'
import linkedinIcon from "../assets/LinkedIn_logo.png";
import githubIcon from "../assets/GitHub_logo.svg";
//import emailIcon from "../assets/email.svg";
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
            <div className="max-w-5xl mx-auto px-6">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="md:row-span-2 border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700">
                        <h1 className="text-4xl md:text-6xl text-white font-bold">
                            Hi, I'm Tom.
                            <span className="block text-lg md:text-xl mt-4 font-medium text-white max-w-[600px] mx-auto">
                                Software developer — building my foundation through meaningful, user-focused projects.
                            </span>
                        </h1>
                        <div className="mt-8 flex justify-center gap-4">
                            <img 
                                src={heroImage} 
                                alt="Tom" 
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl cursor-pointer"
                                onClick={() => setShowPong(true)}
                            />
                        </div>
                    </article>
                    <article className="border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700">
                        <div className="mt-8 flex justify-center gap-4">
                            <Link to="/projects" className="px-5 py-3 rounded-2xl border-4 border-white bg-sky-700 text-white shadow-xl font-bold">See my work</Link>
                        </div>
                    </article>
                    <article className="border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700">
                        <div className="mt-8 flex justify-center gap-4">
                            <Link to="/projects" className="px-5 py-3 rounded-2xl border-4 border-white bg-sky-700 text-white shadow-xl font-bold">See my work</Link>
                        </div>
                    </article>
                </div>
            </div>
            <section className="mt-8 text-center">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="md:col-span-2 border-4 border-white rounded-2xl p-4 shadow-xl transition bg-orange-400">
                        <p className="mb-6 text-xl text-white font-medium">Let's connect!</p>
                        <div className="mb-4 flex justify-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/thomas-parratt-hive/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-12 h-12 opacity-70 hover:opacity-100 transition"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
                            </a>
                            <a
                                href="https://github.com/ThomasParratt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-12 h-12 opacity-70 hover:opacity-100 transition"
                            >
                                <img src={githubIcon} alt="GitHub" className="w-full h-full" />
                            </a>
                        </div>
                    </article>
                </div>
            </section>
            {/* Pong overlay */}
            {showPong && (
                <div className="mt-8 absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <PongGameFace />
                </div>
            )}
        </section>
    );
}