'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPlusCircle, FaCompass } from 'react-icons/fa'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Header() {
  const [isMounted, setIsMounted] = useState(false)
  const { connected } = useWallet()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="bg-[#030303] border-b border-white/10 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
 
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-lg group-hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-600/20">
            CF
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Crowd<span className="text-emerald-400">Fund</span>
          </span>
        </Link>


        <div className="flex items-center gap-4">
   
          {connected && (
            <nav className="hidden md:flex items-center gap-2 mr-4">
              <Link
                href="/create"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-all"
              >
                <FaPlusCircle className="text-sm" />
                <span>Create</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/10 transition-all"
              >
                <FaCompass className="text-sm" />
                <span>Campaigns</span>
              </Link>
            </nav>
          )}

          {/* Wallet Button */}
          {isMounted && (
            <WalletMultiButton />
          )}
        </div>
      </div>
    </header>
  )
}
