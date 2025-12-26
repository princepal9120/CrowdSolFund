'use client'

import CampaignCard from '@/components/CampaignCard'
import CampaignHero from '@/components/CampaignHero'
import { campaigns as dummyCampaign } from '../data'
import { FaSearch, FaFilter } from 'react-icons/fa'

export default function Page() {
  // Use the dummy data directly
  const campaigns = dummyCampaign

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <CampaignHero />

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/50 p-6 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border border-white">
          <div className="relative w-full md:w-96 group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all active:scale-95">
              <FaFilter className="text-slate-400" />
              <span>All Status</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all active:scale-95">
              <span>Newest First</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Featured Campaigns</h2>
          <span className="text-slate-500 font-medium">{campaigns.length} Projects Found</span>
        </div>

        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.cid} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-slate-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              No campaigns found
            </h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              We couldn&apos;t find any campaigns matching your criteria. Why not start one yourself?
            </p>
            <a
              href="/create"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              Start a Campaign
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
