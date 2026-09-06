export default function About() {
    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                <h2 className="text-2xl font-extrabold text-orange-600">ABOUT ME</h2>
                <article
                    className="relative min-h-[500px] md:min-h-[400px] border-2 border-orange-600 rounded-2xl p-6 shadow-xl transition bg-amber-100"
                >
                    <div className="text-orange-600 font-semibold md:text-xl leading-relaxed space-y-6">
                        <p>
                            I am a Software Engineer specializing in full-stack application development and low-level systems architecture. 
                            After successfully navigating the rigorous, peer-learning core curriculum at{" "}
                            <a
                                href="https://hive.fi" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 font-bold hover:text-orange-700"
                            >
                                Hive Helsinki
                            </a>
                            , I have cultivated a deep, self-directed engineering mindset. Operating entirely without traditional teachers or lectures, 
                            I mastered how to deconstruct complex algorithmic challenges, enforce memory safety in strict environments, and build robust software frameworks entirely from scratch.
                        </p>
                        
                        <p>
                            Alongside my engineering background, I have a professional career as an English as a Second Language (ESL) Teacher, 
                            structuring and delivering technical and conversational curricula to learners across global corporate and academic backgrounds. 
                            This cross-disciplinary experience uniquely equips me with advanced communication skills, high empathy, and a proven capability 
                            to clearly articulate technical, abstract concepts to cross-functional teams and stakeholders.
                        </p>
                        
                        <p>
                            I specialize in building type-safe, containerized web ecosystems 
                            and am actively looking to bring my blend of low-level software foundations, modern web engineering, and communication-driven leadership 
                            to a Junior Developer or Full-Stack Engineer role.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}
