import { useParams } from "react-router-dom"
import hiveProjects from "../data/hiveProjects"
import projects from "../data/projects"

export default function ProjectDetails() {
    const { collection, id } = useParams();
    const projectList = collection === "projects" ? projects : hiveProjects;
    const p = projectList.find(pr => pr.id === id);

    if (!p) {
        return (
            <section className="pt-12 pb-12 relative mt-8">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-extrabold">Project not found</h2>
                </div>
            </section>
        )
    }

    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                <article
                    className="relative min-h-[500px] md:min-h-[400px] border-2 border-orange-600 rounded-2xl p-4 shadow-xl transition bg-amber-100"
                >
                    <div className="text-orange-600">
                        <h1 className="text-4xl font-bold">{p.title}</h1>
                        {p.video && <video className="mt-6" src={p.video} controls autoPlay muted loop playsInline></video>}
                        <h2 className="mt-8 text-3xl font-bold">Overview</h2>
                        <p className="mt-4 font-medium md:text-xl leading-relaxed whitespace-pre-line">{p.para1}</p>
                        <h2 className="mt-8 text-3xl font-bold">What I learned</h2>
                        <p className="mt-4 font-medium md:text-xl leading-relaxed whitespace-pre-line">{p.para2}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}