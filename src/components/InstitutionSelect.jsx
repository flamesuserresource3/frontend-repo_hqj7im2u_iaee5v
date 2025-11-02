import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function InstitutionSelect() {
  const [institutions, setInstitutions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState('')

  useEffect(() => {
    let isMounted = true
    async function fetchInstitutions() {
      try {
        setLoading(true)
        const url = `${API_BASE}/api/institutions`
        const { data } = await axios.get(url, { withCredentials: true })
        if (isMounted) setInstitutions(Array.isArray(data) ? data : data?.institutions || [])
      } catch (err) {
        if (isMounted) {
          // Gracefully fallback to demo values if API is unavailable
          setInstitutions([
            { _id: 'demo-1', name: 'Mindz Academy' },
            { _id: 'demo-2', name: 'Aurora Institute' },
            { _id: 'demo-3', name: 'Zenith College' },
          ])
          setError('')
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    fetchInstitutions()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="institutions" className="py-6 sm:py-10">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-[#0f0a1a]/60 backdrop-blur p-5 sm:p-6 shadow-[0_0_40px_rgba(90,42,131,0.25)]"
        >
          <label htmlFor="institution" className="block text-sm font-medium text-[#F7F5F9]/80 mb-2">
            Select Institution
          </label>
          <div className="relative">
            <select
              id="institution"
              className="w-full appearance-none rounded-xl bg-[#2B1440]/60 border border-white/10 text-[#F7F5F9] px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              disabled={loading}
            >
              <option value="">{loading ? 'Loading institutions…' : 'Choose an institution'}</option>
              {institutions.map((inst) => (
                <option key={inst._id || inst.id} value={inst._id || inst.id}>
                  {inst.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#F7F5F9]/70">▾</span>
          </div>

          <AnimatePresence>
            {selected && (
              <motion.a
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                href={`/institution/${selected}`}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-[#2B1440] font-semibold px-4 py-2 shadow-lg shadow-[#D4AF37]/30 transition-colors w-full"
              >
                Continue
              </motion.a>
            )}
          </AnimatePresence>

          {error && (
            <p className="mt-2 text-sm text-red-300">{error}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
