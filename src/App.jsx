import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PongGame from "./games/PongGame";
import PongGameFace from "./games/PongGameFace"
import { Routes, Route, Link } from "react-router-dom"


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pong" element={<PongGame />} />
          <Route path="/pongFace" element={<PongGameFace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
