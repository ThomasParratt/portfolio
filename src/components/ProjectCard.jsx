import React from 'react'


export default function ProjectCard({p}) {
    return (
        <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map(t=> <span key={t} className="px-2 py-1 border rounded">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-2">
                <a href={p.live} className="text-sm underline">Live</a>
                <a href={p.repo} className="text-sm underline">Code</a>
            </div>
        </article>
    )
}