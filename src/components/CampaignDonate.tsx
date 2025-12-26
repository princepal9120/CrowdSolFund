import { Campaign } from '@/utils/interfaces'
import React, { useState } from 'react'
import { FaHeart, FaShieldAlt, FaRocket, FaInfoCircle } from 'react-icons/fa'

export default function CampaignDonate({
  campaign,
}: {
  campaign: Campaign
  pda: string
}) {
  const [amount, setAmount] = useState('')
  const remaining = Math.max(0, campaign.goal - campaign.amountRaised)

  return (
    <div className="space-y-6 sticky top-28">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Support Protocol</h3>
            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-emerald-500 transition-colors shadow-inner">
              <FaHeart className="text-sm" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group/input">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3 ml-1">
                Amount (SOL)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-2xl font-black text-slate-900 placeholder:text-slate-200 outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-300 group-focus-within/input:text-emerald-500 transition-colors tracking-tighter">SOL</div>
              </div>
            </div>

            <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-black py-6 rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-emerald-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/btn">
              <FaRocket className="text-slate-500 group-hover/btn:text-white group-hover/btn:translate-y-[-2px] transition-all" />
              <span className="uppercase tracking-[0.2em] text-xs">Commit Funding</span>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Gap</p>
              <p className="text-sm font-black text-slate-900">{remaining.toLocaleString()} <span className="text-[10px] text-slate-400">SOL</span></p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Fee</p>
              <p className="text-sm font-black text-slate-900">~0.005 <span className="text-[10px] text-slate-400">SOL</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500 shadow-lg shadow-emerald-500/10 border border-emerald-400/20 p-6 rounded-[2rem] flex gap-4 items-start group">
        <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm transform group-hover:rotate-12 transition-transform">
          <FaShieldAlt className="text-sm" />
        </div>
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1 opacity-90">Trust Verified</h4>
          <p className="text-[11px] text-emerald-50 font-medium leading-relaxed">
            Funds are managed by the Fundus smart contract. No central party can access assets before target completion.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 p-6 rounded-[2rem] flex gap-4 items-start shadow-sm">
        <div className="w-10 h-10 shrink-0 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400">
          <FaInfoCircle className="text-sm" />
        </div>
        <div>
          <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Commitment Policy</h4>
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            By funding, you agree to the immutable protocol terms. Withdrawals are subject to specific contract logic.
          </p>
        </div>
      </div>
    </div>
  )
}
