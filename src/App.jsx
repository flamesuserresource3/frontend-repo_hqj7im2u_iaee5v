import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InstitutionSelect from './components/InstitutionSelect'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B1440] via-[#2b1440] to-[#1b0d2a] text-[#F7F5F9] font-sans">
      <Navbar />
      <main>
        <Hero />
        <InstitutionSelect />
      </main>
      <Footer />
    </div>
  )
}
