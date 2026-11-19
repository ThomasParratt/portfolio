import { Link, useParams } from "react-router-dom"
import fullstack from "../data/fullstack"
import frontend from "../data/frontend"
import systems from '../data/systems'
import githubIcon from "../assets/GitHub_logo.svg"
import { buttonClass } from "./linkButton"

// para2 is a list of "• Heading:\nBody" blocks separated by blank lines.
function parseChoices(text = "") {
    return text
        .split(/\n\s*\n/)
        .map(block => block.trim())
        .filter(Boolean)
        .map(block => {
            const [first, ...rest] = block.split("\n");
            return {
                heading: first.replace(/^•\s*/, "").replace(/:\s*$/, ""),
                body: rest.join("\n").trim(),
            };
        });
}

function ProjectLinks({ p }) {
    return (
        <div className="flex flex-wrap gap-2">
            {p.liveInternal && <Link to={p.liveInternal} className={buttonClass}>Live</Link>}
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={buttonClass}>Live</a>}
            {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                    <img src={githubIcon} alt="" aria-hidden="true" className="w-4 h-4" />
                    Repo
                </a>
            )}
        </div>
    )
}

function GlanceRow({ label, children }) {
    return (
        <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-sky-700">{label}</dt>
            <dd className="mt-1 font-medium">{children}</dd>
        </div>
    )
}

export default function ProjectDetails() {
    const { collection, id } = useParams();
    const projectCollections = { fullstack, frontend, systems };
    const projectList = projectCollections[collection] ?? [];
    const p = projectList.find(pr => pr.id === id);

    const backLink = (
        <Link to="/projects" className="font-semibold text-sky-900 hover:underline">← Back to projects</Link>
    );

    if (!p) {
        return (
            <section className="pt-12 pb-12 relative mt-8">
                <div className="max-w-4xl mx-auto px-6 space-y-4">
                    {backLink}
                    <h2 className="text-2xl font-extrabold">Project not found</h2>
                </div>
            </section>
        )
    }

    const glance = p.glance ?? {};
    const choices = parseChoices(p.para2);

    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-5xl mx-auto px-6 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {backLink}
                    <ProjectLinks p={p} />
                </div>
                <article className="border-2 border-sky-900 rounded-2xl p-4 md:p-6 shadow-xl bg-sky-200 text-sky-900">
                    {p.badge && (
                        <span className="inline-block mb-3 px-2 py-0.5 border-2 border-sky-900 rounded-full text-xs font-bold uppercase tracking-wide">{p.badge}</span>
                    )}
                    <h1 className="text-4xl font-bold">{p.title}</h1>

                    <section aria-labelledby="glance-heading" className="mt-6 rounded-xl border-2 border-sky-900 bg-white p-4">
                        <h2 id="glance-heading" className="text-xl font-bold">At a glance</h2>
                        <dl className="mt-3 grid gap-4 md:grid-cols-2">
                            {glance.team && <GlanceRow label="Team">{glance.team}</GlanceRow>}
                            {glance.role && <GlanceRow label="My role">{glance.role}</GlanceRow>}
                            {glance.outcome && <GlanceRow label="Outcome">{glance.outcome}</GlanceRow>}
                            {p.tech?.length > 0 && (
                                <div className="md:col-span-2">
                                    <dt className="text-xs font-bold uppercase tracking-wide text-sky-700">Stack</dt>
                                    <dd className="mt-2 flex flex-wrap gap-2 text-sm text-white">
                                        {p.tech.map(t => <span key={t} className="px-2 py-1 rounded-2xl bg-sky-500">{t}</span>)}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </section>

                    {p.video && <video className="mt-6 w-full rounded-xl" src={p.video} controls autoPlay muted loop playsInline></video>}
                    {p.image && <img className="mt-6 w-full rounded-xl" src={p.image} alt={`${p.title} screenshot`} />}

                    <h2 className="mt-8 text-3xl font-bold">Overview</h2>
                    <p className="mt-4 font-medium md:text-xl leading-relaxed whitespace-pre-line">{p.para1}</p>

                    {choices.length > 0 && (
                        <>
                            <h2 className="mt-8 text-3xl font-bold">Engineering choices and key outcomes</h2>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {choices.map(c => (
                                    <div key={c.heading} className="rounded-xl border-2 border-sky-900 bg-white p-4">
                                        <h3 className="text-lg font-bold">{c.heading}</h3>
                                        {c.body && <p className="mt-2 font-medium leading-relaxed whitespace-pre-line">{c.body}</p>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}
