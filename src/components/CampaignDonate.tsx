import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { FaDollarSign, FaDonate, FaEdit, FaTrashAlt, FaRocket, FaLock } from 'react-icons/fa'
import { Campaign } from '@/utils/interfaces'

const CampaignDonate: React.FC<{ campaign: Campaign; pda: string }> = ({
  campaign,
  pda,
}) => {
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Number(amount) + campaign.amountRaised > campaign.goal) {
      return alert('Amount exceeds campaign goal')
    }

    console.log(`Donated ${amount} SOL to campaign ID: ${campaign.cid}`)
    alert(`Donation successful! ${amount} SOL contributed.`)
    setAmount('')
  }

  const remaining = campaign.goal - campaign.amountRaised
  const percentage = Math.min((Number(amount || 0) / remaining) * 100, 100)

  return (
    <div className="space-y-6 sticky top-24">
      <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FaRocket className="text-emerald-600" />
            Back this Project
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Secure on-chain transaction
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="donationAmount"
                className="block text-slate-700 font-semibold mb-2 text-sm"
              >
                Enter Amount (SOL)
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="donationAmount"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^\d*\.?\d{0,2}$/.test(value)) {
                      setAmount(value)
                    }
                  }}
                  className="w-full pl-4 pr-16 py-4 border border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-2xl font-bold text-slate-900 placeholder:text-slate-300 transition-all"
                  min="0.01"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">SOL</span>
              </div>

              <div className="flex justify-between items-center mt-2 text-xs font-medium text-slate-500">
                <span>Remaining Goal: {remaining.toLocaleString()} SOL</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={
                !amount ||
                !campaign.active ||
                campaign.amountRaised >= campaign.goal
              }
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200
                ${!amount || !campaign.active || campaign.amountRaised >= campaign.goal
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5'
                }`}
            >
              <FaDonate className={!amount ? 'text-slate-400' : 'text-white'} />
              {campaign.active ? 'Donate Now' : 'Campaign Ended'}
            </button>

            <div className="text-center">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <FaLock className="text-[10px]" />
                Transactions are secure and irreversible
              </span>
            </div>
          </form>
        </div>
      </div>

      {campaign.creator === '0xCreatorAddress' && ( // TODO: Replace with actual wallet check
        <div className="bg-slate-900 rounded-xl p-4 text-white">
          <h3 className="text-sm font-bold text-slate-400 uppercase mb-3">Creator Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href={`/campaign/edit/${pda}`}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              <FaEdit />
              Edit
            </Link>
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-red-900/50 hover:bg-red-900 text-red-200 py-2 px-4 rounded-lg text-sm font-medium transition-colors border border-red-900"
            >
              <FaTrashAlt />
              Delete
            </button>
            <button
              className="col-span-2 flex items-center justify-center gap-2 bg-emerald-900/50 hover:bg-emerald-900 text-emerald-200 py-3 px-4 rounded-lg text-sm font-medium transition-colors border border-emerald-900"
            >
              <FaDollarSign />
              Withdraw Funds
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CampaignDonate
