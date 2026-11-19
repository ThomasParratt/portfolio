import { Link } from "react-router-dom"


export default function ProjectCard({p, detailTo}) {
    const visibilityClass = p.liveInternal ? "hidden lg:block" : "";
    const clickableClass = detailTo ? "hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-2xl" : "";
    return (
        <article className={`h-full border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700 ${visibilityClass} ${clickableClass}`}>
            {detailTo ? (
                <Link to={detailTo} className="block">
                    <h3 className="font-semibold text-xl text-white">{p.title}</h3>
                    <p className="text-sm text-white mt-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-white">
                        {p.tech.map(t=> <span key={t} className="px-2 py-1 rounded-2xl bg-sky-500">{t}</span>)}
                    </div>
                </Link>
            ) : (
                <>
                    <h3 className="font-semibold text-xl text-white">{p.title}</h3>
                    <p className="text-sm text-white mt-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-white">
                        {p.tech.map(t=> <span key={t} className="px-2 py-1 rounded-2xl bg-sky-500">{t}</span>)}
                    </div>
                </>
            )}
            <div className="mt-4 flex gap-2">
                {p.liveInternal && (
                    <Link to={p.liveInternal} className="text-sm text-white underline">Live</Link>
                )}
                {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline">Live</a>
                )}
                {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline">Repo</a>
                )}
            </div>
        </article>
    )
}