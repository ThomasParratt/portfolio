import { useState, useRef, useEffect } from 'react'
import Projects from './Projects'
import me from '../assets/me.jpg'
import PongGameFace from '../games/PongGameFace'
import { useLocation } from "react-router-dom"

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
        <section className="pt-24 pb-12 relative">
            {/* Box */}
            <section className="mt-8">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article
                        ref={boxRef}
                        className="relative min-h-[500px] md:min-h-[600px] md:col-span-2 border-2 border-orange-500 rounded-2xl p-4 shadow-xl transition bg-amber-100 flex flex-col md:flex-row items-start gap-6"
                    >
                        {/* Text stays in original flow */}
                        <div className="flex-1">
                            <h1 className="text-5xl md:text-7xl text-orange-500 font-bold">
                                Hi, I'm Tom.
                            </h1>
                            <p className="text-2xl md:text-4xl mt-6 font-semibold text-orange-500 max-w-3xl">
                                A software developer building my foundation through meaningful, user-focused projects.
                            </p>
                            <p className="mt-6 text-orange-500 text-base font-medium md:text-lg leading-relaxed">
                                I’m a software developer actively looking for new opportunities after completing the core curriculum at{" "}
                                <a
                                    href="https://www.hive.fi/en/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-orange-300"
                                >
                                    Hive Helsinki
                                </a>
                                , an innovative peer-learning environment inspired by the 42 Network. Working in a fully self-directed,
                                project-based setting taught me to break down complex problems, learn rapidly, collaborate effectively, and
                                build robust software from the ground up.
                                <br /><br />
                                I also work as a teacher of English as a second language, delivering lessons to
                                learners of all ages and professional backgrounds. This experience has shaped my communication skills,
                                strengthened my ability to explain technical ideas clearly, and taught me how to adapt to different
                                learning and working styles - skills I will now bring into every development team.
                                <br /><br />
                                I’m currently sharpening my full-stack capabilities through the University of Helsinki’s Full Stack Open
                                course while continuing to build user-focused, meaningful projects that help me grow as a developer.
                            </p>
                        </div>

                        {/* Photo */}
                        {!showPong && (
                            <img
                                src={me}
                                alt="Tom"
                                className="absolute top-4 right-4 w-[180px] h-[180px] object-cover rounded-full shadow-xl cursor-pointer"

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
