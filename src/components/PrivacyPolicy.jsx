'use client'
import React from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PrivacyPolicy = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="font-medium text-[#51B504] hover:underline inline-block">
          Privacy Policy
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#130F26] mb-4">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="text-[#4A5568] space-y-4">
            <section>
              <h3 className="text-lg font-semibold text-[#130F26] mb-2">1. Information We Collect</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Usage data and analytics</li>
                <li>Device information and IP address</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#130F26] mb-2">2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Provide and improve our services</li>
                <li>Send important updates and notifications</li>
                <li>Analyze usage patterns</li>
                <li>Protect against fraud</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#130F26] mb-2">3. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#130F26] mb-2">4. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Delete your account</li>
              </ul>
            </section>

            <div className="mt-6 text-center">
              <Link 
                href="/privacy-policy" 
                className="text-[#51B504] hover:underline font-medium"
              >
                View Full Privacy Policy →
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Link 
        href="/privacy-policy" 
        className="font-medium text-[#51B504] hover:underline ml-1"
      >
        (view full policy)
      </Link>
    </>
  );
};

export default PrivacyPolicy;
