import React, { useState } from 'react'
import { FaTimes, FaCoins, FaArrowRight } from 'react-icons/fa'

const WithdrawModal = ({
  campaign,
}: {
  campaign: { title: string; balance: number }
}) => {
  const [amount, setAmount] = useState('')
  const withModal = 'scale-0' // Controlled by parent normally, keeping static for now

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount) return

    // Simulate a withdrawal (static)
    console.log('Withdrawal Successful')
    setAmount('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
      bg-slate-900/80 backdrop-blur-sm z-[3000] transition-opacity duration-300 ${withModal}`}
    >
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md mx-4 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Withdraw Funds</h3>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            onClick={() => { }}
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <FaCoins />
              </div>
              <div>
                <p className="text-xs text-emerald-800 font-semibold uppercase">Available Balance</p>
                <p className="text-lg font-bold text-emerald-900">{campaign.balance.toFixed(2)} SOL</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Withdrawal Amount
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
                  className="w-full pl-4 pr-16 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-semibold text-slate-900"
                  min="0.01"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">SOL</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!amount}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all
                 ${!amount
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5'
                }`}
            >
              Confirm Withdrawal
              <FaArrowRight className="text-xs" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WithdrawModal
