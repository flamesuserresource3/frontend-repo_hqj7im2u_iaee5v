import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#F7F5F9]/60 text-sm">© {new Date().getFullYear()} Mindz. All rights reserved.</p>
        <div className="text-xs text-[#F7F5F9]/50">
          Crafted with care in gold and purple.
        </div>
      </div>
    </footer>
  )
}
