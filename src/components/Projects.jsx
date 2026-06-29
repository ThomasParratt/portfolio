import hiveProjects from '../data/hiveProjects'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import { Link } from "react-router-dom"


export default function Projects() {
    return (
        <section id="projects" className="py-8">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="mt-8 text-2xl font-extrabold">SELECTED HIVE PROJECTS</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hiveProjects.map((p, index) =>
                        <Link key={p.id} to={`/projects/hive/${p.id}`} className="block h-full">
                            <ProjectCard p={p} />
                        </Link>
                    )}
                </div>
                <h2 className="mt-8 text-2xl font-extrabold">OTHER SELECTED PROJECTS</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((p, index) =>
                        <Link key={p.id} to={`/projects/projects/${p.id}`} className="block h-full">
                            <ProjectCard p={p} />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}