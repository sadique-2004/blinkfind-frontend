'use client';

import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(10000);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        // First, increment the count
        const response = await fetch('/api/visitors', {
          method: 'POST',
        });
        const data = await response.json();
        
        if (data.count) {
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="inline-flex items-center gap-2 mt-3 bg-[#51B504]/10 px-4 py-2 rounded-full">
      <div className="flex items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-5 h-5 text-[#51B504]"
        >
          <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/>
        </svg>
        <div className="flex items-center gap-1">
          <span className="text-[#51B504] text-lg font-semibold">{visitorCount.toLocaleString()}</span>
          <span className="text-[#51B504] text-sm font-medium">visitors</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
