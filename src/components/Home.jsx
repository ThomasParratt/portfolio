import { useState, useRef, useEffect } from 'react'
import Projects from './Projects'
import me from '../assets/me.jpg'
import PongGameFace from '../games/PongGameFace'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import linkedinIcon from "../assets/LinkedIn_logo.png"
import githubIcon from "../assets/GitHub_logo.svg"

export default function Home() {
    const [showPong, setShowPong] = useState(false);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0, top: 0, left: 0 });
    const boxRef = useRef(null);
    const location = useLocation();

    // Hide Pong overlay when route changes
    useEffect(() => {
        setShowPong(false);
    }, [location]);

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
        <section className="pt-12 pb-12 relative">
            <section className="mt-8">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article
                        ref={boxRef}
                        className="relative min-h-[500px] md:min-h-[400px] md:col-span-2 border-2 border-orange-600 rounded-2xl p-4 shadow-xl transition bg-amber-100 flex flex-col md:flex-row items-start gap-6"
                    >
                        <div className="flex-1">
                            <h1 className="text-5xl md:text-7xl text-orange-600 font-semibold">
                                Hi, I'm Tom.
                            </h1>
                            <p className="text-2xl md:text-4xl mt-6 font-medium text-orange-600 max-w-lg">
                                A software developer building my foundation through meaningful, user-focused projects.
                            </p>
                            <p className="mt-6 text-orange-600 text-base font-medium md:text-xl leading-relaxed">
                                Take a look at my{" "} 
                                <Link to="/projects" className="underline underline-offset-2 hover:text-orange-300">projects</Link> 
                                {" "}and{" "} 
                                <Link to="/contact" className="underline underline-offset-2 hover:text-orange-300">contact</Link>
                                {" "}me if you have any enquiries, questions, feedback, or just want a chat.
                            </p>
                            <p className="mt-6 text-orange-600 text-base font-medium md:text-xl leading-relaxed">
                                We can also connect on{" "}
                                <a
                                    href="https://www.linkedin.com/in/thomas-parratt-hive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-orange-300"
                                >
                                    LinkedIn
                                </a> 
                                {" "}or{" "} 
                                <a
                                    href="https://github.com/ThomasParratt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-orange-300"
                                >
                                    GitHub
                                </a>
                                .
                            </p>
                            <div className="mt-8 mb-4 flex justify-center gap-6">
                                <a
                                    href="https://www.linkedin.com/in/thomas-parratt-hive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-16 h-16"
                                    >
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
                                </a>
                                <a
                                    href="https://github.com/ThomasParratt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-16 h-16"
                                    >
                                    <img src={githubIcon} alt="GitHub" className="w-full h-full" />
                                </a>
                            </div>
                        </div>
                        {/* Photo */}
                        {!showPong && (
                            <img
                                src={me}
                                alt="Tom"
                                className="absolute top-1/2 left-1/2 w-[160px] h-[160px] object-cover rounded-full shadow-xl cursor-pointer transform -translate-x-1/2 -translate-y-1/2"


                                onClick={handleShowPong}
                            />
                        )}
                    </article>
                </div>
            </section>

            <Projects />
            
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
