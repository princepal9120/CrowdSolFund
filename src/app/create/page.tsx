'use client'

import { useState } from 'react'
import { FaRocket, FaImage, FaCoins, FaAlignLeft, FaHeading } from 'react-icons/fa'

export default function Page() {
  // Local form state
  const [form, setForm] = useState({
    title: '',
    description: '',
    image_url: '',
    goal: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Submitted:', form)
    alert('Campaign created successfully!')
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Launch Your Campaign</h1>
          <p className="text-slate-500 text-lg">Define your goals and rally the community on Solana.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500" />

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
            <div className={`transition-all duration-300 ${focusedField === 'title' ? 'scale-[1.01]' : ''}`}>
              <label className="flex items-center gap-2 text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                <FaHeading className="text-emerald-500" />
                Campaign Title *
              </label>
              <input
                type="text"
                placeholder="Ex: Ocean Cleanup Initiative 2024"
                maxLength={64}
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                onFocus={() => setFocusedField('title')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-semibold text-lg text-slate-900 placeholder:text-slate-400 placeholder:font-normal"
                required
              />
              <p className="text-right text-xs text-slate-400 mt-1">{form.title.length}/64</p>
            </div>

            <div className={`transition-all duration-300 ${focusedField === 'goal' ? 'scale-[1.01]' : ''}`}>
              <label className="flex items-center gap-2 text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                <FaCoins className="text-emerald-500" />
                Funding Goal (SOL) *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0.00"
                  value={form.goal}
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^\d*\.?\d{0,2}$/.test(value)) {
                      setForm({ ...form, goal: value })
                    }
                  }}
                  onFocus={() => setFocusedField('goal')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 pl-5 pr-16 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-mono font-bold text-xl text-slate-900 placeholder:text-slate-400"
                  required
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-slate-400 pointer-events-none">SOL</span>
              </div>
            </div>

            <div className={`transition-all duration-300 ${focusedField === 'image' ? 'scale-[1.01]' : ''}`}>
              <label className="flex items-center gap-2 text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                <FaImage className="text-emerald-500" />
                Cover Image URL *
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                maxLength={256}
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                onFocus={() => setFocusedField('image')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                required
              />
            </div>

            <div className={`transition-all duration-300 ${focusedField === 'desc' ? 'scale-[1.01]' : ''}`}>
              <label className="flex items-center gap-2 text-slate-700 font-bold mb-2 text-sm uppercase tracking-wide">
                <FaAlignLeft className="text-emerald-500" />
                Campaign Description *
              </label>
              <textarea
                placeholder="Describe your project, roadmap, and how funds will be used..."
                maxLength={512}
                rows={6}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                onFocus={() => setFocusedField('desc')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 leading-relaxed resize-none"
                required
              />
              <p className="text-right text-xs text-slate-400 mt-1">{form.description.length}/512</p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 mb-6 bg-blue-50 text-blue-800 px-4 py-3 rounded-lg text-sm">
                <FaRocket />
                <p>Creating a campaign requires a small network fee on Solana.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-slate-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
              >
                Launch Campaign
                <FaRocket className="text-emerald-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
