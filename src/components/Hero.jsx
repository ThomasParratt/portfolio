import React, { useState, useRef, useEffect } from 'react';
import Projects from './Projects';
import heroImage from '../assets/me.jpg';
import linkedinIcon from "../assets/LinkedIn_logo.png";
import githubIcon from "../assets/GitHub_logo.svg";
import PongGameFace from '../games/PongGameFace';
import { useLocation } from "react-router-dom";

export default function Hero() {
    const [showPong, setShowPong] = useState(false);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0, top: 0, left: 0 });
    const boxRef = useRef(null);
    const location = useLocation();

    // Hide Pong overlay when route changes
    useEffect(() => {
        setShowPong(false);
    }, [location]);

    // Handle click on the hero image
    const handleShowPong = () => {
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            setBoxSize({
                width: rect.width,
                height: rect.height,
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX
            });
        }
        setShowPong(true);
    };

    return (
        <section className="pt-24 pb-12 relative">
            {/* Hero Box */}
            <section className="mt-8">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article
                        ref={boxRef}
                        className="relative min-h-[500px] md:min-h-[600px] md:col-span-2 border-4 border-white rounded-2xl p-4 shadow-xl transition bg-orange-400 flex flex-col md:flex-row items-start gap-6"
                    >
                        {/* Text stays in original flow */}
                        <div className="flex-1">
                            <h1 className="text-5xl md:text-7xl text-white font-bold">
                                Hi, I'm Tom.
                            </h1>
                            <p className="text-2xl md:text-4xl mt-6 font-medium text-white">
                                Software developer — building my foundation through meaningful, user-focused projects.
                            </p>
                            <p className="mt-6 text-white text-base md:text-lg leading-relaxed">
                                I’m a software developer actively looking for new opportunities after completing the core curriculum at{" "}
                                <a
                                    href="https://www.hive.fi/en/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-orange-100"
                                >
                                    Hive Helsinki
                                </a>
                                , an innovative peer-learning environment inspired by the 42 Network. Working in a fully self-directed,
                                project-based setting taught me to break down complex problems, learn rapidly, collaborate effectively, and
                                build robust software from the ground up.
                                <br /><br />
                                Before transitioning into software development, I worked as an English teacher, delivering lessons to
                                learners of all ages and professional backgrounds. This experience has shaped my communication skills,
                                strengthened my ability to explain technical ideas clearly, and taught me how to adapt to different
                                learning and working styles—skills I will now bring into every development team.
                                <br /><br />
                                I’m currently sharpening my full-stack capabilities through the University of Helsinki’s Full Stack Open
                                course while continuing to build user-focused, meaningful projects that help me grow as a developer.
                            </p>
                        </div>

                        {/* Photo centered absolutely */}
                        {!showPong && (
                            <img
                                src={heroImage}
                                alt="Tom"
                                className="absolute top-1/2 left-1/2 w-[80px] h-[80px] object-cover rounded-full shadow-xl transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                onClick={handleShowPong}
                            />
                        )}
                    </article>
                </div>
            </section>

            {/* Projects */}
            <Projects />

            {/* Contact / Social Links */}
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
                                className="w-12 h-12"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
                            </a>
                            <a
                                href="https://github.com/ThomasParratt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-12 h-12"
                            >
                                <img src={githubIcon} alt="GitHub" className="w-full h-full" />
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            {/* Pong overlay */}
            {showPong && boxSize.width > 0 && (
                <div
                    className="absolute z-50 pointer-events-none"
                    style={{
                        width: boxSize.width,
                        height: boxSize.height,
                        top: boxSize.top,
                        left: boxSize.left
                    }}
                >
                    <PongGameFace width={boxSize.width} height={boxSize.height} />
                </div>
            )}
        </section>
    );
}
