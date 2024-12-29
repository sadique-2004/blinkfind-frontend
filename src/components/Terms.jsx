'use client'
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Terms = () => {
  return (
    <Dialog>
      <DialogTrigger className="font-medium text-[#51B504] hover:underline">
        Terms & Conditions
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#130F26] mb-4">Terms & Conditions</DialogTitle>
        </DialogHeader>
        <div className="text-[#4A5568] space-y-4">
          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">1. Acceptance of Terms</h3>
            <p className="mb-4">By accessing and using BlinkFind&apos;s services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">2. User Responsibilities</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Comply with applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">3. Service Usage</h3>
            <p>Our services are provided "as is" and may be modified at any time. We reserve the right to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Modify or discontinue services</li>
              <li>Restrict access to certain features</li>
              <li>Remove inappropriate content</li>
              <li>Update these terms as needed</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">4. Intellectual Property</h3>
            <p>
              All content, features, and functionality are owned by BlinkFind and protected by international copyright laws.
              Users may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">5. Limitation of Liability</h3>
            <p>
              BlinkFind is not liable for any indirect, incidental, or consequential damages arising from your use of our services.
              This includes data loss, profit loss, or business interruption.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">6. Contact Information</h3>
            <p>
              For questions about these terms, contact us at:
              <br />
              Email: legal@blinkfind.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-[#130F26] mb-2">7. Acceptance</h3>
            <p className="mb-4">Click &ldquo;Accept&rdquo; to continue using our services.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Terms;
