'use client'

import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import CampaignCard from '@/components/CampaignCard'
import { campaigns as dummyCampaign } from '../data'
import { FaSearch, FaFilter } from 'react-icons/fa'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Page() {
  // Use the dummy data directly
  const campaigns = dummyCampaign
  const { connected } = useWallet()

  // Show Hero landing page when wallet NOT connected
  if (!connected) {
    return (
      <HeroGeometric
        badge="#1 CrowdSolFunding Platform"
        title1="Revolutionize"
        title2="CrowdSolFunding"
      />
    )
  }

  // Show campaigns when wallet IS connected
  return (
    <div className="bg-[#030303] min-h-screen pb-20 pt-10">
      <div id="campaigns" className="container mx-auto px-6 relative z-20">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl shadow-black/20 p-6 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border border-white/10">
          <div className="relative w-full md:w-96 group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-500 font-medium text-white"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-5 py-3.5 bg-slate-800 border border-white/10 rounded-xl text-slate-300 font-semibold hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-900/30 transition-all active:scale-95">
              <FaFilter className="text-slate-400" />
              <span>All Status</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3.5 bg-slate-800 border border-white/10 rounded-xl text-slate-300 font-semibold hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-900/30 transition-all active:scale-95">
              <span>Newest First</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Featured Campaigns</h2>
          <span className="text-slate-400 font-medium">{campaigns.length} Projects Found</span>
        </div>

        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.cid} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-800/50 rounded-2xl border border-dashed border-white/10">
            <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-slate-400 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              No campaigns found
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-8">
              We couldn&apos;t find any campaigns matching your criteria. Why not start one yourself?
            </p>
            <a
              href="/create"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              Start a Campaign
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
