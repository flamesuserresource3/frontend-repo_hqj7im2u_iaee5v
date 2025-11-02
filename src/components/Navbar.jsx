import React from 'react'
import { motion } from 'framer-motion'
import { Menu, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 backdrop-blur-md bg-[#2B1440]/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ x: 2 }}
                className="text-[#F7F5F9]/80 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            ))}
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#F7F5F9]/80 hover:text-[#D4AF37] hover:bg-white/5 transition-colors">
            <Menu className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-auto md:ml-0"
          >
            <a
              href="/"
              className="select-none inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-gradient-to-br from-[#5A2A83] to-[#2B1440] px-3 py-1.5 shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              aria-label="Mindz Home"
            >
              <span className="text-[#D4AF37] font-semibold tracking-wide">Mindz</span>
              <span className="sr-only">logo</span>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
