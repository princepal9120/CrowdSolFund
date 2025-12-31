import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaUserCircle, FaPlusCircle, FaBars, FaTimes } from 'react-icons/fa'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-[100] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-2xl group-hover:bg-emerald-500 transition-all duration-300 transform group-hover:rotate-6 shadow-lg shadow-emerald-600/20">
            CF
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase transition-colors group-hover:text-emerald-400">
            Crowd<span className="text-slate-400 font-medium">Fund</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center">
          <Link
            href="/create"
            className="text-slate-300 hover:text-emerald-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <FaPlusCircle className="text-lg opacity-70" />
            <span>Create</span>
          </Link>
          <Link
            href="/account"
            className="text-slate-300 hover:text-emerald-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <FaUserCircle className="text-lg opacity-70" />
            <span>Account</span>
          </Link>
        </nav>

        {/* Wallet & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {isMounted && (
            <div className="hidden md:block">
              <WalletMultiButton />
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-emerald-400 focus:outline-none p-2 transition-colors"
          >
            {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 py-6 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 space-y-6">
            <Link
              href="/create"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-emerald-900/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center shadow-sm text-emerald-400 group-hover:text-emerald-300">
                  <FaPlusCircle />
                </div>
                <span className="font-bold text-white">Start a Campaign</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-emerald-400">→</div>
            </Link>

            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-emerald-900/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center shadow-sm text-emerald-400 group-hover:text-emerald-300">
                  <FaUserCircle />
                </div>
                <span className="font-bold text-white">My Dashboard</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-emerald-400">→</div>
            </Link>

            {isMounted && (
              <div className="pt-2">
                <WalletMultiButton className="!w-full !justify-center !py-4 !rounded-2xl !h-auto" />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

