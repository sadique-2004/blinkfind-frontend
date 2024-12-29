'use client'
import React from 'react'
import Image from 'next/image'
import { Network, Robot } from 'lucide-react';

import { ArrowRight, CheckCircle,TabletSmartphone, Database, ChartBar } from 'lucide-react'

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-[#59981A] pb-2">{children}</h2>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#59981A] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-[#59981A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function AIDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      <header className="bg-[#d7f7d4] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-[#0A3357]">Cyber Security Expertise</h1>
          <p className="text-xl max-w-2xl text-[#59981A]"> Protecting your digital assets with BlinkFind's cutting-edge
          cybersecurity solutions.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <SectionTitle>Our Cybersecurity Services</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Network size={32} />}
              title="Network Security"
              description="Comprehensive solutions to safeguard your network infrastructure against unauthorized access and attacks."
            />
            <FeatureCard
              icon={<TabletSmartphone size={32}/>}
              title="Penetration Testing"
              description="Identify vulnerabilities in your systems through ethical hacking and security assessments."
            />
            <FeatureCard
              icon={<Database size={32} />}
              title="Malware Analysis"
              description="Analyze and mitigate potential malware threats to keep your systems secure"
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Technologies We Use</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "TensorFlow", "PyTorch", "scikit-learn", "NLTK", "spaCy",
                "Hugging Face", "OpenCV", "Pandas", "NumPy", "Keras"
              ].map((tech, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-[#59981A] mr-2" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Our Cybersecurity Process</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
          <ProcessStep
              number={1}
              title="Assessment & Strategy"
              description="Understand your security requirements and devise a customized strategy to protect your assets."
            />
            <ProcessStep
              number={2}
              title="Threat Identification"
              description="Identify potential threats through rigorous scanning and testing using advanced tools."
            />
            <ProcessStep
              number={3}
              title="Implementation"
              description="Deploy robust security solutions tailored to your organization’s needs."
            />
            <ProcessStep
              number={4}
              title="Monitoring & Maintenance"
              description="Continuously monitor and update your systems to defend against evolving cyber threats."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Industries We Serve</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
              icon={<ChartBar size={32} />}
              title="Banking & Finance"
              description="Secure sensitive financial data and transactions from cyber threats."
            />
            <FeatureCard
              icon={<ChartBar size={32} />}
              title="Healthcare"
              description="Protect patient data and comply with regulations to maintain trust and security."
            />
            <FeatureCard
              icon={<ChartBar size={32} />}
              title="E-commerce"
              description="Enhance your platform's security to prevent data breaches and fraud."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Why Choose BlinkFind for Cybersecurity Services?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                {[
                 "Tailored security solutions",
                  "Expert security professionals",
                  "Cutting-edge tools and techniques",
                  "24/7 monitoring and support",
                  "Proactive threat prevention",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-[#59981A] mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/ai1.jpg"
                alt="AI Interaction"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#d7f7d4] text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-[#0A3357]">Ready to Secure Your Future With Our  Cybersecurity Services?</h2>
          <p className="text-xl mb-8 text-[#59981A]">Let BlinkFind help you build a resilient cybersecurity framework to safeguard your business.</p>
          <a href='/#Contact Us' className="bg-white text-[#51b504] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </a>
        </section>
      </main>
    </div>
  )
}