'use client';

import React from 'react';
import VisitorCounter from './VisitorCounter';

const Footer = () => {
  return (
    <footer className="bg-[#D8FFD0] py-12 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-center gap-x-8 space-y-8 md:space-y-0">
        {/* First column: Logo, Social Icons, and Text */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="flex items-center justify-center space-x-0 mt-4">
            <img src="/logo.svg" alt="BlinkFind Logo" className="w-14" />
            <h3 className="text-2xl font-extrabold text-[#052d55]">
              Blink<span className="text-[#51B504] font-bold">Find</span>
            </h3>
          </div>
          <VisitorCounter />
          <p className="mt-4 text-gray-700 font-normal">
            Empowering change through <br />
            innovative solutions that <br />
            shape a better future.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/people/QuickFind/61566368033281/" className="bg-[#51B504] p-[11px] rounded-full">
              <img src="/FooterImages/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com/QucikFind" className="bg-[#51B504] p-[11px] rounded-full">
              <img src="/FooterImages/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/quickfinding" className="bg-[#51B504] p-[11px] rounded-full">
              <img src="/FooterImages/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/quick_find_app" className="bg-[#51B504] p-[11px] rounded-full">
              <img src="/FooterImages/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-16 text-gray-700">
            <p> 2024 BlinkFind. All rights reserved.</p>
          </div>
        </div>

        {/* Second column: Quick Links */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 mt-4">Blink Links</h3>
          <ul className="space-y-3">
            <li><a href="#Home" className="text-gray-700 hover:underline">Home</a></li>
            <li><a href="/aboutus" className="text-gray-700 hover:underline">About Us</a></li>
            <li><a href="#Services" className="text-gray-700 hover:underline">Our Expertise</a></li>
            <li><a href="#Projects" className="text-gray-700 hover:underline">Our Projects</a></li>
            <li><a href="#Contact Us" className="text-gray-700 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Third column: Address */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Address
          </h3>
          <p className="text-gray-700">
            BlinkFind Head Office
            <br />
            Near Ryan International School
            <br />
            India
          </p>
          <div className="mt-4">
            <a 
              href="https://wa.me/6390168645?text=Hi!%20I%20want%20to%20know%20more%20about%20BlinkFind." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg shadow-md hover:bg-[#1DA851] transition inline-flex items-center gap-2"
            >
              <img src="/whats.svg" alt="WhatsApp" className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-32 text-gray-700">
            <a href="#" className="hover:underline">Privacy</a>{" "}
            |
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
