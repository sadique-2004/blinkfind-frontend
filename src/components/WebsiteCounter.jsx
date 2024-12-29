'use client';

import Script from 'next/script';

const WebsiteCounter = () => {
  return (
    <>
      <Script
        id="counter-script"
        src="https://cdn.counter.dev/script.js"
        data-id="bedb2f64-f147-47b7-ad23-92c62f1d9b53"
        data-utcoffset="6"
      />
      <div className="flex items-center gap-2">
        <div className="text-sm text-gray-600">
          <a href="https://counter.dev">Real-time Visitors</a>
        </div>
      </div>
    </>
  );
};

export default WebsiteCounter;
