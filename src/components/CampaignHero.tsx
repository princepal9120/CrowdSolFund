import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaRocket } from 'react-icons/fa'

const CampaignHero = () => {
  return (
    <section className="bg-slate-900 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Primary Protocol Engine
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-white tracking-tighter">
              The Protocol for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Global Funding</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium tracking-tight">
              A high-integrity fundraising layer on Solana. Secure, immutable, and optimized for professional capital formation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="/account"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Campaigns</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/create"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold py-3.5 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <FaRocket className="text-slate-400" />
                <span>Start Fundraising</span>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-slate-500 rounded-full" />
                <span>Zero Platform Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-slate-500 rounded-full" />
                <span>Instant Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-slate-500 rounded-full" />
                <span>Fully On-Chain</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-emerald-500/30 blur-[120px] rounded-full transform rotate-12 group-hover:bg-blue-500/20 transition-colors duration-1000" />
            <div className="relative z-10 p-4 bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500">
              <Image
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Digital Assets"
                width={800}
                height={600}
                className="w-full rounded-[1.8rem] shadow-inner opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/5 flex items-center gap-4 animate-float shadow-xl">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">SOL</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Network Status</div>
                  <div className="text-white font-bold">Protocol Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CampaignHero
