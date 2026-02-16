import Navbar from './components/Navbar'
import Home from './components/Home'
import Jacob from './components/Jacob'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import PongGame from "./games/PongGame";
import PongGameFace from "./games/PongGameFace"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pong" element={<PongGame />} />
          <Route path="/pongFace" element={<PongGameFace />} />
          <Route path="/jacob" element={<Jacob />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
