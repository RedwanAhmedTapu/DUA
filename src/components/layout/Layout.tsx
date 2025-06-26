import React, { useState } from "react";
import { LeftSidebar } from "./LeftSidebar";
import { Navbar } from "./Navbar";
import { RightSidebar } from "./RightSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] relative">
      {/* Mobile menu toggle buttons (only visible on small screens) */}
      <div className="md:hidden fixed bottom-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          className="w-12 h-12 bg-[#1ea45a] rounded-full shadow-lg flex items-center justify-center text-white"
        >
          {showLeftSidebar ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        <button
          onClick={() => setShowRightSidebar(!showRightSidebar)}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1ea45a]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>

      <Navbar 
        onMenuToggle={() => setShowLeftSidebar(!showLeftSidebar)}
        onSettingsToggle={() => setShowRightSidebar(!showRightSidebar)}
      />

      {/* Left Sidebar */}
      <div className={`
        fixed md:static z-30 h-[calc(100vh-64px)] md:h-auto
        transition-all duration-300 ease-in-out
        ${showLeftSidebar ? 'left-0' : '-left-full'} md:left-0
      `}>
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      <div className={`
        fixed md:static z-30 h-[calc(100vh-64px)] md:h-auto
        transition-all duration-300 ease-in-out
        ${showRightSidebar ? 'right-0' : '-right-full'} md:right-0
      `}>
        <RightSidebar />
      </div>

      {/* Main content area */}
      <div className={`
        pt-16 md:pt-20 px-4 md:px-6
        transition-all duration-300 ease-in-out
        ml-0 md:ml-[90px]
        mr-0 lg:mr-[320px]
      `}>
        {children}
      </div>
    </div>
  );
};