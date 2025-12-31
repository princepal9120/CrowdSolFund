'use client'

import React from 'react'
import { campaigns as dummyCampaigns, dummyProgramState } from '@/data'
import CampaignCard from '@/components/CampaignCard'
import AccountDetails from '@/components/AccountDetails'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'

export default function Page() {
  const publicKey = '0x1234567890abcdef'

  const campaigns = dummyCampaigns
  const programState = dummyProgramState

  return (
    <div className="min-h-screen bg-[#030303] py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">My Campaigns</h1>
          <Link
            href="/create"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-all"
          >
            <FaPlus />
            <span>New Campaign</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {campaigns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {campaigns.map((campaign) => (
                  <CampaignCard key={campaign.cid} campaign={campaign} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-800/50 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white">
                  You have no campaigns available at the moment
                </h2>
                <p className="text-slate-400 mt-4">
                  Launch your first campaign and make a difference!
                </p>

                <div className="mt-6">
                  <Link
                    href="/create"
                    className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                  >
                    Create a Campaign
                  </Link>
                </div>
              </div>
            )}
          </div>

          {programState && programState.platformAddress === publicKey && (
            <div className="md:col-span-1">
              <AccountDetails programState={programState} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
