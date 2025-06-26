import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";

export const Navbar = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // At top of page
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-[90px] right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page title */}
        <div className="flex flex-col items-start gap-0.5">
          <h1 className="font-semibold text-gray-800 text-2xl">
            Dua Page
          </h1>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-4">
          <div className="flex w-[371px] items-center justify-between pl-4 pr-1 py-1 bg-white rounded-lg border border-gray-200">
            <Input
              className="border-0 shadow-none font-normal text-gray-600 text-base placeholder:text-gray-400 focus-visible:ring-0"
              placeholder="Search by Dua Name"
            />
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-gray-100 rounded-md">
              <Search className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-2">
          <Avatar className="w-[45px] h-[45px]">
            <AvatarImage src="/profile-1.svg" alt="User profile" />
          </Avatar>
          <img
            className="w-2 h-1.5"
            alt="Dropdown indicator"
            src="/polygon-2.svg"
          />
        </div>
      </div>
    </nav>
  );
};