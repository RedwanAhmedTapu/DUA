import React from "react";
import { LeftSidebar } from "./LeftSidebar";
import { Navbar } from "./Navbar";
import { RightSidebar } from "./RightSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      
      {/* Main content area */}
      <div className="ml-[90px] mr-[320px] pt-20">
        {children}
      </div>
    </div>
  );
}; 