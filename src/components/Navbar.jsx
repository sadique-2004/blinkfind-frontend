"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
 // Ensure you import useRouter
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
 // Import toast for notifications

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const router = useRouter(); // Initialize the router

  // Check if the user is logged in and set the role on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setRole(storedRole);
  }, []);

  const handleLoginLogout = useCallback(() => {
    if (isLoggedIn) {
      // User is logged in, perform logout
      localStorage.removeItem('token');
      localStorage.removeItem('role'); // Also clear the role if needed
      setIsLoggedIn(false);
      toast.success('Logged out successfully');
      router.push('/');
    } else {
      // User is not logged in, redirect to login
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  const handleNavItemClick = (item, href) => {
    setActiveItem(item);
    setIsSidebarOpen(false);

    // If it's a hash link and we're not on the home page, navigate to home first
    if (href.startsWith('#') && typeof window !== 'undefined' && window.location.pathname !== '/') {
      router.push(`/${href}`);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    // { name: "Services", href: "#Services" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact Us", href: "#Contact" },
    { name: isLoggedIn ? "Logout" : "Login", href: isLoggedIn ? "#" : "/login", onClick: handleLoginLogout },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth > 639) {
        setIsSidebarOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const Sidebar = () => (
    <div
      className={`fixed top-0 left-0 h-full w-[250px] bg-[#D1FFD1] transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-[#022E50] font-bold text-xl mb-4"
          aria-label="Close Sidebar"
        >
          &times;
        </button>
        <nav className="flex flex-col gap-4">
          {navItems.map(({ name, href, onClick }) => (
            <Link
              key={name}
              href={href.startsWith('#') && typeof window !== 'undefined' && window.location.pathname !== '/' ? `/${href}` : href}
              onClick={() => {
                handleNavItemClick(name, href);
                if (onClick) {
                  onClick(); // Execute login/logout function if defined
                }
                if (name !== "About Us") setIsSidebarOpen(false);
              }}
              className={`p-2 rounded-[10px] hover:border hover:border-[#51B504] transition-all duration-200 ${
                activeItem === name
                  ? "bg-[#51B504] text-[#FFFFFF] hover:border-transparent"
                  : "text-[#022E50]"
              }`}
            >
              {name}
            </Link>
          ))}
          {role === "admin" && (
            <Link
              href="/admin/contact-forms"
              className="p-2 rounded-[10px] text-[#022E50]"
            >
              Contact Forms
            </Link>
          )}
        </nav>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full bg-[#D1FFD1] z-50">
      <div className="w-full">
        <nav className="flex justify-between items-center h-[80px] px-4 mx-auto mx-w-full pt-0">
          <div className="flex items-center justify-start">
            <img src="/logo.svg" alt="Logo" className="mr-1" />
            <span className="font-poppins text-lg font-bold leading-[30px] text-left text-[#022E50]">
              Blink
            </span>
            <span className="text-[#51B504] font-poppins text-lg font-bold leading-[30px] text-left">
              Find
            </span>
          </div>
          <ul className="flex lg:gap-[30px] items-center h-[44px] font-poppins font-[500] leading-[24px] lg:text-lg sm:text-[12px] sm:gap-[5px] sm:leading-[18px] xs:hidden cursor-pointer">
            {navItems.map(({ name, href, onClick }) => (
              <li
                key={name}
                className={`lg:p-[10px] sm:p-[6px] rounded-[10px] hover:border hover:border-[#51B504] transition-all duration-200 ${
                  activeItem === name ? "bg-[#51B504] text-[#FFFFFF] hover:border-transparent" : ""
                }`}
                onClick={() => {
                  handleNavItemClick(name, href);
                  if (onClick) onClick(); // Execute login/logout function if defined
                }}
              >
                <Link href={href.startsWith('#') && typeof window !== 'undefined' && window.location.pathname !== '/' ? `/${href}` : href} scroll={true} passHref>
                  {name}
                </Link>
              </li>
            ))}
            {role === "admin" && (
              <Link
                href="/admin/contact-forms"
                className="p-2 rounded-[10px] text-[#022E50]"
              >
                Contact Forms
              </Link>
            )}
          </ul>
          <div className="hidden xs:block">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none"
              aria-label="Open Sidebar"
            >
              <img src="/HeroImages/img/Vector.png" alt="Menu" />
            </button>
          </div>
        </nav>
        <Sidebar />
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
