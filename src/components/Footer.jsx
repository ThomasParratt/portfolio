import linkedinIcon from "../assets/LinkedIn_logo.png"
import githubIcon from "../assets/GitHub_logo.svg"
import emailIcon from "../assets/email.svg"

export default function Footer() {
  return (
    <footer className="py-6">
      <p className="mb-6 flex justify-center text-xl text-black font-medium">Let's connect!</p>
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
          <a 
            href="mailto:thomasparratt@googlemail.com" 
            className="w-12 h-12"
            >
            <img src={emailIcon} alt="Email" className="w-full h-full" />
          </a>
        </div>
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Thomas Parratt — Built with React + Vite
      </div>
    </footer>
  );
}
