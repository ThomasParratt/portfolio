import { Link } from "react-router-dom"
import githubIcon from "../assets/GitHub_logo.svg"
import { buttonClass } from "./linkButton"



export default function ProjectCard({p, detailTo}) {
    const displayClass = p.liveInternal ? "hidden lg:flex" : "flex";
    const featuredClass = p.featured ? "md:col-span-2" : "";
    const clickableClass = detailTo ? "hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-2xl" : "";
    return (
        <article className={`h-full flex-col border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700 ${displayClass} ${featuredClass} ${clickableClass}`}>
            {detailTo ? (
                <Link to={detailTo} className="block">
                    {p.badge && (
                        <span className="inline-block mb-2 px-2 py-0.5 border-2 border-white rounded-full text-xs font-bold uppercase tracking-wide text-white">{p.badge}</span>
                    )}
                    <h3 className="font-semibold text-xl text-white">{p.title}</h3>
                    <p className="text-sm text-white mt-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-white">
                        {p.tech.map(t=> <span key={t} className="px-2 py-1 rounded-2xl bg-sky-500">{t}</span>)}
                    </div>
                </Link>
            ) : (
                <>
                    {p.badge && (
                        <span className="inline-block mb-2 px-2 py-0.5 border-2 border-white rounded-full text-xs font-bold uppercase tracking-wide text-white">{p.badge}</span>
                    )}
                    <h3 className="font-semibold text-xl text-white">{p.title}</h3>
                    <p className="text-sm text-white mt-2">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-white">
                        {p.tech.map(t=> <span key={t} className="px-2 py-1 rounded-2xl bg-sky-500">{t}</span>)}
                    </div>
                </>
            )}
            <div className="mt-auto pt-4 flex gap-2">
                {p.liveInternal && (
                    <Link to={p.liveInternal} className={buttonClass}>Live</Link>
                )}
                {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={buttonClass}>Live</a>
                )}
                {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                        <img src={githubIcon} alt="" aria-hidden="true" className="w-4 h-4" />
                        Repo
                    </a>
                )}
            </div>
        </article>
    )
}