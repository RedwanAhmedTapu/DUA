import React from "react";
import { 
  Home, 
  Menu, 
  Bookmark, 
  Minus, 
  Settings, 
  HelpCircle, 
  User,
  Plus
} from "lucide-react";

export const LeftSidebar = (): JSX.Element => {
  // Navigation menu items data with Lucide icons
  const navItems = [
    { icon: Home, alt: "Home", isActive: true },
    { icon: Menu, alt: "Menu", isActive: false },
    { icon: Bookmark, alt: "Bookmark", isActive: false },
    { icon: Minus, alt: "Keep minus", isActive: false },
    { icon: Settings, alt: "Settings", isActive: false },
    { icon: HelpCircle, alt: "Support", isActive: false },
    { icon: User, alt: "Profile", isActive: false },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[90px] bg-white shadow-lg z-40 flex flex-col">
      {/* App logo */}
      <div className="flex items-center justify-center pt-6 pb-8">
        <div className="w-12 h-12 bg-[#1ea45a] rounded-xl flex items-center justify-center">
          <div className="text-white font-bold text-xl">D</div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="flex flex-col items-center gap-4 flex-1 px-4">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="relative w-full">
              <div 
                className={`h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  item.isActive 
                    ? 'bg-[#1ea45a] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Action button */}
      <div className="pb-6 flex justify-center px-4">
        <div className="w-12 h-12 bg-[#1ea45a] rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-200">
          <Plus size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};