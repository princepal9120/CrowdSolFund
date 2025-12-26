import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaUserCircle, FaPlusCircle, FaBars, FaTimes, FaWallet } from 'react-icons/fa'

// In a real app, this would be imported from wallet-adapter
// Placeholder for the wallet connect button
const WalletButton = () => (
  <button className="wallet-adapter-button-trigger">
    Connect Wallet
  </button>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-green-700 transition-colors">
            C
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            crowdfund
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/create"
            className="text-slate-600 hover:text-green-600 font-medium flex items-center space-x-2 transition-colors duration-200"
          >
            <FaPlusCircle className="text-lg" />
            <span>Create Campaign</span>
          </Link>
          <Link
            href="/account"
            className="text-slate-600 hover:text-green-600 font-medium flex items-center space-x-2 transition-colors duration-200"
          >
            <FaUserCircle className="text-lg" />
            <span>My Account</span>
          </Link>
        </nav>

        {/* Wallet & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {isMounted && (
            <div className="hidden md:block">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-2">
                <FaWallet className="text-sm" />
                <span>Connect Wallet</span>
              </button>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-green-600 focus:outline-none p-2"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
          <div className="container mx-auto px-6 space-y-4">
            <Link
              href="/create"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-green-600 font-medium py-2 flex items-center gap-3"
            >
              <FaPlusCircle />
              <span>Start a Campaign</span>
            </Link>
            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-green-600 font-medium py-2 flex items-center gap-3"
            >
              <FaUserCircle />
              <span>My Account</span>
            </Link>
            {isMounted && (
              <div className="pt-2">
                <button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-2">
                  <FaWallet />
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
