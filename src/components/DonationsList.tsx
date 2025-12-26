import { truncateAddress } from '@/utils/helper'
import { Transaction } from '@/utils/interfaces'
import Link from 'next/link'
import React from 'react'
import { FaMoneyBillWave, FaExternalLinkAlt } from 'react-icons/fa'

const DonationsList: React.FC<{ donations: Transaction[] }> = ({
  donations,
}) => {
  const CLUSTER_NAME = process.env.CLUSTER_NAME || 'custom'

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <div className="bg-emerald-100 p-2 rounded-lg">
          <FaMoneyBillWave className="text-emerald-600 text-lg" />
        </div>
        Recent Donations
      </h2>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {donations.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {donations.map((donation, index) => (
              <div
                key={index}
                className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto mb-2 sm:mb-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-mono text-slate-500">
                    {index + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-bold text-lg">
                      {donation.amount.toLocaleString()} SOL
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(donation.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-sm text-slate-600 font-medium">by</span>
                  <Link
                    href={`https://explorer.solana.com/address/${donation.owner}?cluster=${CLUSTER_NAME}`}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 rounded-lg text-sm font-mono transition-colors group"
                  >
                    {truncateAddress(donation.owner)}
                    <FaExternalLinkAlt className="text-[10px] opacity-50 group-hover:opacity-100" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMoneyBillWave className="text-slate-300 text-2xl" />
            </div>
            <p className="text-slate-500 font-medium">No donations yet.</p>
            <p className="text-slate-400 text-sm mt-1">Be the first to back this project!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonationsList
