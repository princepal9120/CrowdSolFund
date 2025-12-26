import { Campaign } from '@/utils/interfaces'
import { truncateAddress } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'
import { FaUser, FaHistory, FaShieldAlt, FaCheckCircle, FaClock, FaExternalLinkAlt } from 'react-icons/fa'


export default function CampaignDetails({ campaign }: { campaign: Campaign }) {
  const isFunded = campaign.amountRaised >= campaign.goal
  const isActive = campaign.active
  const progressPercentage = Math.min(
    (campaign.amountRaised / campaign.goal) * 100,
    100
  )

  return (
    <div className="md:col-span-2 space-y-8">
      {/* Header Info */}
      <div className="flex flex-wrap items-center gap-3">
        {isActive ? (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Active Protocol
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-xs font-bold uppercase tracking-widest">
            <FaClock />
            Archived
          </span>
        )}
        {isFunded && (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-bold uppercase tracking-widest">
            <FaCheckCircle />
            Fully Funded
          </span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
        {campaign.title}
      </h1>

      {/* Bento Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Funding Goal Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-6 text-emerald-600">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <FaShieldAlt />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Protocol Secured</span>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Target Capital</p>
          <h3 className="text-4xl font-black text-slate-900 mb-8">
            {campaign.goal} <span className="text-lg font-bold text-slate-300">SOL</span>
          </h3>

          <div>
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-black text-slate-900 tracking-tight">{progressPercentage.toFixed(1)}% Secured</span>
              <span className="text-xs font-bold text-slate-400 uppercase">{campaign.amountRaised} SOL Raised</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-50">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${isFunded ? 'bg-gradient-to-r from-blue-600 to-blue-400' : 'bg-gradient-to-r from-emerald-600 to-emerald-400'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Creator Identity Card */}
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
          <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl transition-all group-hover:bg-blue-500/20" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 border border-white/5">
                  <FaUser className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Authorized Operator</p>
                  <p className="font-mono text-sm font-bold text-white mt-1">{truncateAddress(campaign.creator)}</p>
                </div>
              </div>
            </div>
            <Link
              href={`https://solscan.io/account/${campaign.creator}`}
              target="_blank"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-all group/link bg-emerald-500/5 py-4 px-6 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30"
            >
              Verify On-Chain
              <FaExternalLinkAlt className="text-[10px] group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Description */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
          <FaShieldAlt className="text-9xl text-slate-900" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-emerald-500 rounded-full" />
            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Protocol Mission</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {campaign.description || 'No detailed mission statement provided for this protocol entry.'}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 transition-colors hover:bg-slate-100/50">
              <FaHistory className="text-slate-400" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Initialization</p>
                <p className="text-xs font-bold text-slate-700 mt-1">
                  {new Date(campaign.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 transition-colors hover:bg-slate-100/50">
              <FaShieldAlt className="text-slate-400" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Security Layer</p>
                <p className="text-xs font-black text-emerald-600 mt-1 uppercase">Immuntability Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
