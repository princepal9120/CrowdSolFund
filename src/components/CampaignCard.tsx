import { Campaign } from '@/utils/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa'

const CampaignCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const progressPercentage = Math.min(
    (campaign.amountRaised / campaign.goal) * 100,
    100
  )

  const isFunded = campaign.amountRaised >= campaign.goal
  const isExpired = !campaign.active

  // Determine status badge
  let StatusIcon = FaClock
  let statusText = 'Active'
  let statusColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'

  if (isFunded) {
    StatusIcon = FaCheckCircle
    statusText = 'Funded'
    statusColor = 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  } else if (isExpired) {
    StatusIcon = FaExclamationCircle
    statusText = 'Ended'
    statusColor = 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  } else {
    statusColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    statusText = 'In Progress'
  }

  return (
    <div className="group bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={campaign.imageUrl}
          alt={`${campaign.title} campaign`}
          width={400}
          height={250}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1.5 border backdrop-blur-md shadow-sm transition-all group-hover:translate-y-[-2px] ${statusColor}`}>
          <StatusIcon className="text-[10px]" />
          {statusText}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1" title={campaign.title}>
            {campaign.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed h-[40px]">
            {campaign.description}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Progress Bar Area */}
          <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 group-hover:border-emerald-500/20 transition-all">
            <div className="flex justify-between items-end mb-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Raised</span>
                <span className="text-xl font-black text-white leading-none mt-1">
                  {campaign.amountRaised} <span className="text-xs font-bold text-slate-500">SOL</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Goal</span>
                <span className="text-sm font-bold text-slate-400 mt-1">
                  {campaign.goal} SOL
                </span>
              </div>
            </div>
            <div className="h-2.5 w-full bg-slate-700/50 rounded-full overflow-hidden p-[2px]">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${isFunded ? 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{campaign.donors} Backers</span>
            </div>

            <Link
              href={`/campaign/${campaign.publicKey}`}
              className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-emerald-600/20"
            >
              View Campaign
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
