const skills = [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'HTML / CSS'] },
    { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Prisma', 'Tailwind CSS', 'Zod'] },
    { label: 'Tools', items: ['Git', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Vitest', 'Vite', 'AWS', 'Valgrind'] },
]

export default function About() {
    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-5xl mx-auto px-6 space-y-6">
                <h2 className="text-2xl font-extrabold">ABOUT ME</h2>
                <article className="relative border-2 border-sky-900 rounded-2xl p-6 shadow-xl transition bg-sky-200">
                    <div className="text-sky-900 font-semibold md:text-xl leading-relaxed space-y-6">
                        <p>
                            I'm a Software Engineer working across full-stack web development and low-level systems.
                            I completed the peer-learning core curriculum at{" "}
                            <a
                                href="https://hive.fi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 font-bold hover:text-sky-600"
                            >
                                Hive Helsinki
                            </a>
                            , where there are no teachers or lectures. That taught me to break down hard problems on my own,
                            write memory-safe code under strict constraints, and build software from scratch.
                        </p>

                        <p>
                            Before engineering, I worked as an ESL teacher for corporate and academic learners worldwide.
                            I bring that experience to engineering teams: I can explain technical ideas clearly to anyone.
                        </p>

                        <p>
                            I build type-safe, containerized web applications, and I'm looking for a Junior Developer or
                            Full-Stack Engineer role.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {skills.map(group => (
                            <div key={group.label} className="rounded-xl border-2 border-sky-900 bg-sky-100 p-4">
                                <h3 className="text-sm font-extrabold tracking-wide text-sky-900 uppercase mb-3">{group.label}</h3>
                                <ul className="flex flex-wrap gap-2 text-sm text-sky-950">
                                    {group.items.map(item => (
                                        <li key={item} className="px-2 py-1 rounded-2xl text-white bg-sky-500">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    )
}
