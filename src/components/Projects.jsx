import fullstack from '../data/fullstack'
import frontend from '../data/frontend'
import systems from '../data/systems'
import ProjectCard from './ProjectCard'


export default function Projects() {
    return (
        <section id="projects" className="py-8">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="mt-8 text-2xl font-extrabold">FULL-STACK & WEB APPLICATIONS</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fullstack.map((p) =>
                        <ProjectCard
                            key={p.id}
                            p={p}
                            detailTo={p.clickable === false ? undefined : `/projects/fullstack/${p.id}`}
                        />
                    )}
                </div>
                <h2 className="mt-8 text-2xl font-extrabold">FRONTEND & INTERACTIVE PROJECTS</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {frontend.map((p) =>
                        <ProjectCard
                            key={p.id}
                            p={p}
                            detailTo={p.clickable === false ? undefined : `/projects/frontend/${p.id}`}
                        />
                    )}
                </div>
                <h2 className="mt-8 text-2xl font-extrabold">SYSTEMS PROGRAMMING</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {systems.map((p) =>
                        <ProjectCard
                            key={p.id}
                            p={p}
                            detailTo={p.clickable === false ? undefined : `/projects/systems/${p.id}`}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}