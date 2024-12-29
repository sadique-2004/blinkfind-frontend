'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Users, DollarSign, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-white shadow-md p-6 rounded-lg text-left hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
  >
    <Icon className="w-12 h-12 text-[#51B504] mb-4" />
    <h3 className="text-xl font-semibold text-[#0A3357] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const MarketPotential = ({ title, value }) => (
  <div className="bg-[#0A3357] text-white p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
)

const WhyQuickFind = () => {
  return (
    <section className="bg-[#f7fafc] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A3357] mb-8 text-center">Why QuickFind is Better</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon={Zap}
            title="First in India"
            description="No major local competitors, giving us a unique advantage in the market."
          />
          <FeatureCard 
            icon={Users}
            title="Focus on Irreplaceable Items"
            description="We prioritize emotional value over objects, helping people reconnect with what matters most."
          />
          <FeatureCard 
            icon={Globe}
            title="Community-Driven"
            description="Our platform leverages the power of community, increasing the chances of item recovery."
          />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#0A3357] mb-6">Market Potential</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MarketPotential title="India Opportunity" value="₹600 crore/year" />
            <MarketPotential title="Global Expansion" value="$1 billion annually" />
          </div>
          <p className="mt-6 text-gray-600">
            With 200M smartphone users in India and 20M losing items yearly, even a 10% subscription rate at ₹300/year presents a massive opportunity. Globally, the potential expands to 1B users.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#0A3357] mb-6">Revenue Streams</h3>
          <ul className="space-y-4">
            {[
              "Ad Revenue: With 50M global users, targeted ads can generate ₹100 crore annually.",
              "Freemium Model: Free basic usage with premium features for a fee.",
              "Transaction Fee: Small fee for secure item exchanges when a match is made.",
              "Institutional Partnerships: Collaborations with universities, airports, and events."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#51B504] mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#51B504] hover:bg-[#3f8c03] text-white text-lg py-2 px-6">
            Join QuickFind Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhyQuickFind

