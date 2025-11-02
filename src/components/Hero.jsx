import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(90,42,131,0.25),transparent_45%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-[#F7F5F9] drop-shadow"
        >
          Welcome <span className="text-[#D4AF37]">Mindz</span>!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-[#F7F5F9]/80 max-w-2xl mx-auto"
        >
          Empowering institutions with insightful learning experiences and a touch of gold.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#institutions"
            className="rounded-full bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-[#2B1440] font-semibold px-6 py-3 shadow-lg shadow-[#D4AF37]/30 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}
