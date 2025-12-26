import { Campaign } from '@/utils/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCoins, FaUsers, FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa'

const CampaignCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const progressPercentage = Math.min(
    (campaign.amountRaised / campaign.goal) * 100,
    100
  )

  const isFunded = campaign.amountRaised >= campaign.goal
  const isExpired = !campaign.active // Assuming active false means expired/ended

  // Determine status badge
  let StatusIcon = FaClock
  let statusText = 'Active'
  let statusColor = 'bg-emerald-100 text-emerald-800 border-emerald-200'

  if (isFunded) {
    StatusIcon = FaCheckCircle
    statusText = 'Funded'
    statusColor = 'bg-blue-100 text-blue-800 border-blue-200' // Blue for "Complete/Funded"
  } else if (isExpired) {
    StatusIcon = FaExclamationCircle
    statusText = 'Ended'
    statusColor = 'bg-slate-100 text-slate-800 border-slate-200'
  } else {
    // Active and not fully funded yet
    statusColor = 'bg-amber-50 text-amber-700 border-amber-200'
    statusText = 'In Progress'
  }

  return (
    <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={campaign.imageUrl}
          alt={`${campaign.title} campaign`}
          width={400}
          height={250}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border shadow-sm ${statusColor}`}>
          <StatusIcon className="text-xs" />
          {statusText}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1" title={campaign.title}>
            {campaign.title}
          </h2>
          <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed h-[40px]">
            {campaign.description}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-2xl font-bold text-slate-900">
                {campaign.amountRaised} <span className="text-sm font-medium text-slate-400">SOL</span>
              </span>
              <span className="text-xs font-semibold text-slate-500">
                of {campaign.goal} SOL
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${isFunded ? 'bg-blue-500' : 'bg-emerald-500'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
              <FaUsers className="text-slate-400" />
              <span>{campaign.donors} Backers</span>
            </div>

            <Link
              href={`/campaign/${campaign.publicKey}`}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
