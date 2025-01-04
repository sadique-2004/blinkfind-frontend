'use client'

import React from "react";
import Link from "next/link";
import { Play, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SectionHeading = ({ children, className }) => (
  <h2 className={`font-bold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 ${className}`}>
    {children}
  </h2>
);

const ShowcaseProduct = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="Projects" className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h1 className="font-poppins text-[#51B504] text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">
        OUR PRODUCTS
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <SectionHeading>
            QuickFind App: A reliable platform for lost-and-found items
          </SectionHeading>

          <ul className="mt-6 space-y-4 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-[#51B504] mr-2">•</span>
              <span><strong>Easy Reporting:</strong> Found something valuable? Upload it and help someone reconnect.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#51B504] mr-2">•</span>
              <span><strong>Simple Search:</strong> Effortlessly find your lost items through easy search filters.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#51B504] mr-2">•</span>
              <span><strong>Emotional Value:</strong> Restoring memories and connections that can never be replaced.</span>
            </li>
          </ul>

          <div className="mt-8">
            <Link href="/quickfind">
              <Button className="bg-[#51B504] hover:bg-[#3f8c03] text-white px-4 py-6">
                Learn More About QuickFind
              </Button>
            </Link>
          </div>
        </div>

       
        {/* <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            {isPlaying ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/Videos/quickFind_video.mp4"
                
                title="QuickFind App Demo"
                autoPlay
                controls
                muted
                loop
              ></video>

              
               
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Button
                  onClick={toggleVideo}
                  className="bg-[#51B504] hover:bg-[#3f8c03] text-white rounded-full p-4 transition-transform transform hover:scale-110"
                >
                  <Play className="h-12 w-12" />
                </Button>
              </div>
            )}
          </div>
        </div> */}
          {/* for horizontal video */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {isPlaying ? (
         
              // <video
              //   className="absolute inset-0 w-full h-full"
              //   src="/Videos/quickFind_video.mp4"
              //   title="QuickFind App Demo"
              //   autoPlay
              //   muted
              //   loop
              // ></video>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BltWQv_KYwE?si=Cm-GStGv6YYdRcHN"
                // src="/Videos/quickFind_video.mp4"
                title="QuickFind App Demo"
                allow="accelerometer; autoplay;"
                allowFullScreen
                
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={toggleVideo}
                  className="bg-[#51B504] hover:bg-[#3f8c03] text-white rounded-full p-4"
                >
                  <Play className="h-12 w-12" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShowcaseProduct;



