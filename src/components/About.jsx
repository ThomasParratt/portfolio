import { Link } from "react-router-dom"

export default function About() {
    return (
        <section className="pt-12 pb-12 relative">
            <section className="mt-8">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article
                        className="relative min-h-[500px] md:min-h-[600px] md:col-span-2 border-2 border-orange-600 rounded-2xl p-4 shadow-xl transition bg-amber-100 flex flex-col md:flex-row items-start gap-6"
                    >
                        <div className="flex-1">
                            <p className="mt-6 text-orange-600 text-base font-normal md:text-xl leading-relaxed">
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
        </section>
    )
}