'use client'

import React from 'react'
import PrivacyPolicy from '@/components/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0A3357]">Privacy Policy</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
