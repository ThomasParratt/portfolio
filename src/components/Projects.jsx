import React from 'react'
import hiveProjects from '../data/hiveProjects'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'


export default function Projects() {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-2xl font-bold">Selected Hive projects</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hiveProjects.map(p=> <ProjectCard key={p.id} p={p} />)}
                </div>
                <h2 className="text-2xl font-bold">Other selected projects</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map(p=> <ProjectCard key={p.id} p={p} />)}
                </div>
            </div>
        </section>
    )
}