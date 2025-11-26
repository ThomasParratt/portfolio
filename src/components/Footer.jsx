import React from 'react'
import linkedinIcon from "../assets/LinkedIn_logo.png";
import githubIcon from "../assets/GitHub_logo.svg";
import emailIcon from "../assets/email.svg";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
        <div className="flex justify-center gap-6 mb-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thomas-parratt-hive/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ThomasParratt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>

          {/* Email */}
          <a href="mailto:thomasparratt@gmail.com">
            <img
              src={emailIcon}
              alt="Email"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>

        © {new Date().getFullYear()} Thomas Parratt — Built with React + Vite
      </div>
    </footer>
  );
}
