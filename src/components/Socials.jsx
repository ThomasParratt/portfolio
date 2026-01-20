import linkedinIcon from "../assets/LinkedIn_logo.png";
import githubIcon from "../assets/GitHub_logo.svg";

export default function Socials() {
    return (
        <section className="mt-8 text-center">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="md:col-span-2 border-4 border-white rounded-2xl p-4 shadow-xl transition bg-orange-400">
                    <p className="mb-6 text-xl text-white font-medium">Let's connect!</p>
                    <div className="mb-4 flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/thomas-parratt-hive/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-12 h-12"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
                        </a>
                        <a
                            href="https://github.com/ThomasParratt"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-12 h-12"
                        >
                            <img src={githubIcon} alt="GitHub" className="w-full h-full" />
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}