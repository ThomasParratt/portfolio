import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PongGame from "./games/PongGame";
import PongGameFace from "./games/PongGameFace"
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pong" element={<PongGame />} />
          <Route path="/pongFace" element={<PongGameFace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
