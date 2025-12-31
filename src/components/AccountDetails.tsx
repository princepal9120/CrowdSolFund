import { ProgramState } from '@/utils/interfaces'
import React, { useState } from 'react'
import { FaDonate } from 'react-icons/fa'

const AccountDetails: React.FC<{ programState: ProgramState }> = ({
  programState,
}) => {
  const [percent, setPercent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!percent) return

    console.log(`Service fee updated to ${percent}%`)
    setPercent('')
    alert(`Service fee successfully updated to ${percent}%`)
  }

  return (
    <div>
      <div className="bg-slate-800/50 border border-white/10 shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FaDonate className="text-emerald-400" />
          Update Service Fee
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="donationAmount"
            className="block text-slate-400 font-semibold mb-2"
          >
            Percentage range is (1 - 15%)
          </label>
          <input
            type="text"
            name="percent"
            value={percent}
            onChange={(e) => {
              const value = e.target.value
              if (/^([1-9]|1[0-5])?$/.test(value)) {
                setPercent(value)
              }
            }}
            placeholder={`Current Fee (${programState.platformFee}%)`}
            className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-white placeholder:text-slate-500"
            required
          />
          <button
            type="submit"
            className={`mt-4 w-full bg-emerald-600 hover:bg-emerald-500 ${!percent ? 'opacity-50 cursor-not-allowed' : ''
              } text-white font-semibold py-3 px-4 rounded-lg flex items-center
              justify-center gap-2 transition-all`}
          >
            Update Fee
          </button>
        </form>
      </div>
    </div>
  )
}

export default AccountDetails
