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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live on Solana Devnet
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white tracking-tight">
              Fund the Future on <span className="text-emerald-400">Solana</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              A decentralized, transparent crowdfunding platform built for serious operators. Securely raise capital or back projects with full on-chain verification.
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

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full transform rotate-12" />
            <Image
              src="https://cdn.pixabay.com/photo/2015/02/27/18/31/money-652560_960_720.jpg"
              alt="Crowdfunding Illustration"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-2xl relative z-10 border border-slate-700/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default CampaignHero
