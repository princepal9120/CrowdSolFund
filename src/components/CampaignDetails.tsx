import { truncateAddress } from '@/utils/helper'
import { Campaign } from '@/utils/interfaces'
import Link from 'next/link'
import React from 'react'
import { FaUserCircle, FaCoins, FaPaperPlane, FaExternalLinkAlt, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa'

const CampaignDetails: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const isFunded = campaign.amountRaised >= campaign.goal
  const isActive = campaign.active

  const CLUSTER_NAME = process.env.CLUSTER_NAME || 'custom'

  // Progress Bar
  const progress = Math.min((campaign.amountRaised / campaign.goal) * 100, 100)

  return (
    <div className="md:col-span-2 space-y-8">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          {isActive ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Active Campaign
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
              <FaClock className="text-slate-400" />
              Campaign Ended
            </span>
          )}

          {isFunded && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
              <FaCheckCircle className="text-blue-500" />
              Goal Reached
            </span>
          )}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          {campaign.title}
        </h2>
      </div>

      {/* Funding Status Card (Bento Style) */}
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

        <div className="relative z-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Raised</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold font-mono text-white">{campaign.amountRaised.toLocaleString()}</span>
                <span className="text-xl text-emerald-400 font-semibold">SOL</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm font-medium mb-1">Goal: {campaign.goal.toLocaleString()} SOL</p>
              <p className="text-emerald-400 font-medium text-lg">{progress.toFixed(1)}%</p>
            </div>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-6 border border-slate-700">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${isFunded ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-emerald-500 to-emerald-400'}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
            <div>
              <p className="text-slate-500 text-xs uppercase mb-1">Donors</p>
              <p className="text-xl font-bold">{campaign.donors}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase mb-1">Status</p>
              <p className={`text-xl font-bold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>{isActive ? 'Open' : 'Closed'}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase mb-1">Withdrawals</p>
              <p className="text-xl font-bold">{campaign.withdrawals}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase mb-1">Balance</p>
              <p className="text-xl font-bold">{campaign.balance.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Metadata Grid */}
      <div className="grid grid-cols-1 gap-8">
        {/* Description */}
        <div className="prose prose-slate max-w-none">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">About this Campaign</h3>
          <p className="text-slate-600 leading-7 whitespace-pre-line text-lg">
            {campaign?.description}
          </p>
        </div>

        {/* Creator Info Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FaUserCircle className="text-lg" />
            Verified Creator
          </h3>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xl">
                <FaUserCircle />
              </div>
              <div>
                <p className="text-slate-900 font-semibold font-mono text-sm">{campaign?.creator}</p>
                <p className="text-slate-500 text-xs">Campaign ID: {campaign?.cid}</p>
              </div>
            </div>

            <Link
              href={`https://explorer.solana.com/address/${campaign?.creator}?cluster=${CLUSTER_NAME}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors shadow-sm"
            >
              <span>View on Explorer</span>
              <FaExternalLinkAlt className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails
