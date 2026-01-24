
export default function About() {
    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                <h2 className="text-2xl font-extrabold">ABOUT ME</h2>
                <article
                    className="relative min-h-[500px] md:min-h-[600px] border-2 border-orange-600 rounded-2xl p-4 shadow-xl transition bg-amber-100"
                >
                    <div>
                        <p className="text-orange-600 font-medium md:text-xl leading-relaxed">
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
                </article>
            </div>
        </section>
    )
}