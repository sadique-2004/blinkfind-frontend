"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsCard = ({ postImage, description, href }) => (
  <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-6 text-left hover:shadow-xl transition h-auto rounded-[30px]">
    <div className="relative h-[200px] mb-4">
      <Image
        src={postImage}
        alt="Post Image"
        className="rounded-[15px] object-cover w-full h-full"
        layout="fill"
      />
    </div>
    <p className="text-lg text-left mb-4 font-bold">{description}</p>
    <Link href={href}>
      <button className="text-black hover:text-white mt-4 px-6 py-3 rounded-lg flex items-center hover:bg-[#51B504] transition text-lg hover:shadow-lg hover:shadow-[#51B504]/50">
        Learn More on LinkedIn
      </button>
    </Link>
  </div>
);

const NewsAndUpdate = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      postimg: "./posts/post1.jpg",
      description:
        "Exciting News: QuickFind App is Coming Soon in Integral University!🎉📱 Lost Something? Found Something? Or Want to Sell Something?",
      href: "https://www.linkedin.com/posts/abdullahkhanspn_innovation-linkedin-android-ugcPost-7273938789461319680-F3sc?utm_source=share&utm_medium=member_desktop",
    },
    {
      postimg: "./posts/post2.jpg",
      description:
        "Why do businesses feel stuck, hesitating to take the first step toward innovation?Unfortunately, I don’t have the exact answer 🥲",
      href: "https://www.linkedin.com/posts/blinkfind_code-tech-mnc-activity-7267758107697528832-vijD?utm_source=share&utm_medium=member_desktop",
    },
    {
      postimg: "./posts/post3.jpg",
      description:
        "⚡𝗟𝗼𝘀𝘁 𝗜𝘁? 𝗡𝗲𝗲𝗱 𝗜𝘁? 𝗦𝗲𝗹𝗹 𝗜𝘁? 𝗥𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝗶𝘇𝗲 𝗬𝗼𝘂𝗿 𝗦𝗲𝗮𝗿𝗰𝗵 𝗶𝗻 𝗝𝗨𝗦𝗧 𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀🚀 👋 𝗟𝗼𝘀𝘁 𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴? 𝗦𝗲𝗹𝗹𝗶𝗻𝗴 𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴?",
      href: "https://www.linkedin.com/posts/abdullahkhanspn_android-lostandfound-sellolditems-ugcPost-7271479059178487809-ImHF?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto" id="Services">
      <div className="m-2 p-5">
        <h1 className="font-poppins text-[#51B504] text-sm my-8 mt-14 lg:text-xl font-medium lg:font-semibold">
          News And Update
        </h1>
        <Slider {...settings} className="team-carousel">
          {categories.map((category, index) => (
            <NewsCard
              key={index}
              postImage={category.postimg}
              description={category.description}
              href={category.href} // Pass href to NewsCard
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsAndUpdate;
