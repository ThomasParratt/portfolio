import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import { Routes, Route, Link } from "react-router-dom"
import heroImage from '../assets/me.jpg'
import LinkedInLogo from '../assets/LinkedIn_logo.png'
import GitHubLogo from '../assets/GitHub_logo.svg'


export default function Hero() {
    return (
        <section className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi — I'm Tom.
                    <span className="block text-lg md:text-xl mt-4 font-medium text-gray-600">
                        Software engineer & English teacher — I build playful web experiences.
                    </span>
                </h1>
                <div className="mt-8 flex justify-center gap-4">
                    <img 
                        src={heroImage} 
                        alt="Tom" 
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                    />
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/projects" className="px-5 py-3 rounded-lg border">See my work</Link>
                    <Link to="/contact" className="px-5 py-3 rounded-lg bg-gray-900 text-white">Contact me</Link>
                </div>
                {/*<div className="mt-8 relative flex justify-center items-center w-full h-[550px] md:h-[700px]">
                    <img 
                        src={heroImage} 
                        alt="Tom" 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                    />
                    {[
                        { text: "PROJECTS", to: "/projects", x: "0%", y: "200%", logo: null},
                        { text: "ABOUT", to: "/about", x: "-100%", y: "-180%", logo: null },
                        { text: "CONTACT", to: "/contact", x: "100%", y: "-180%", logo: null },
                        { text: "LinkedIn", to: "https://www.linkedin.com/in/thomas-parratt-hive/", x: "-200%", y: "0%", logo: LinkedInLogo },
                        { text: "GitHub", to: "https://github.com/ThomasParratt", x: "200%", y: "0%", logo: GitHubLogo },
                    ].map((item, i) => (
                        <Link
                            key={i}
                            to={item.to}
                            className="absolute flex items-center justify-center 
                                    w-20 h-20 md:w-24 md:h-24 
                                    rounded-full bg-white shadow-md border 
                                    hover:shadow-lg hover:scale-105 
                                    transition-transform p-2 text-sm md:text-base font-medium"
                            style={{
                                transform: `translate(${item.x}, ${item.y})`
                            }}
                        >
                            {item.logo ? (
                                <img
                                    src={item.logo}
                                    alt={item.text}
                                    className="w-10 h-10 md:w-14 md:h-14 object-contain"
                                />
                            ) : (
                                <span className="text-sm md:text-base font-medium">{item.text}</span>
                            )}
                        </Link>
                    ))}
                </div>*/}
            </div>
        </section>
    );
}