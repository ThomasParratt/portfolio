import { Link } from "react-router-dom"
import githubIcon from "../assets/GitHub_logo.svg"
import { buttonClass } from "./linkButton"



function Thumbnail({ thumb, detailTo, className = "" }) {
    const img = (
        <img
            src={thumb.src}
            width={thumb.width}
            height={thumb.height}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border-2 border-white bg-white"
        />
    )
    // The card's text link already names the project, so the image link is a
    // mouse-only duplicate: skipped by keyboard and screen readers.
    return detailTo ? (
        <Link to={detailTo} tabIndex={-1} aria-hidden="true" className={`block ${className}`}>{img}</Link>
    ) : <div className={className}>{img}</div>
}

export default function ProjectCard({p, detailTo}) {
    const displayClass = p.liveInternal ? "hidden lg:flex" : "flex";
    const featuredClass = p.featured ? "md:col-span-2" : "";
    const sideBySide = p.featured && p.thumb;
    const layoutClass = sideBySide ? "md:grid md:grid-cols-2 md:gap-6 md:items-center" : "";
    const clickableClass = detailTo ? "hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-2xl" : "";

    const body = (
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
    )

    return (
        <article className={`h-full flex-col gap-4 border-4 border-white rounded-2xl p-4 shadow-xl transition bg-sky-700 ${displayClass} ${featuredClass} ${layoutClass} ${clickableClass}`}>
            {/* Image on top on mobile; on the right of featured cards from md up, so the title is read first */}
            {p.thumb && <Thumbnail thumb={p.thumb} detailTo={detailTo} className={sideBySide ? "md:order-last" : ""} />}
            <div className="flex flex-col flex-1 h-full">
                {detailTo ? (
                    <Link to={detailTo} className="block">{body}</Link>
                ) : body}
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
            </div>
        </article>
    )
}
