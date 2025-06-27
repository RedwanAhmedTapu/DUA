import React from "react";
import { 
  Settings as SettingsIcon, 
  Type, 
  Palette, 
  Languages,
  Grid,
  Grid2X2
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Switch } from "../ui/switch";

export const RightSidebar = (): JSX.Element => {
  // Settings menu items data with Lucide icons
  const menuItems = [
    {
      id: "language",
      title: "Language Settings",
      icon: Languages,
      isActive: false,
    },
    {
      id: "general",
      title: "General Settings",
      icon: SettingsIcon,
      isActive: false,
    },
    {
      id: "font",
      title: "Font Settings",
      icon: Grid2X2,
      isActive: false,
    },
    {
      id: "appearance",
      title: "Appearance Settings",
      icon: Grid2X2,
      isActive: true,
    },
  ];

  return (
    <div className="fixed right-0 top-20 h-screen w-[320px] p-4 z-30">
      <div className="sticky top-0">
        <Card className="rounded-2xl border border-gray-200 shadow-sm">
          <CardContent className="p-6 flex flex-col">
            <div className="flex justify-center mb-8">
              <h2 className="font-semibold text-lg text-gray-800">Settings</h2>
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`relative rounded-lg cursor-pointer transition-all duration-200 ${
                      item.isActive 
                        ? "bg-gray-50" 
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {item.isActive && (
                      <div className="absolute w-1 h-full top-0 left-0 bg-[#1ea45a] rounded-l-lg" />
                    )}
                    <div className="flex items-center p-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <IconComponent 
                          size={18} 
                          className={item.isActive ? "text-[#1ea45a]" : "text-gray-600"} 
                        />
                      </div>
                      <span
                        className={`ml-3 text-sm font-medium ${
                          item.isActive ? "text-[#1ea45a]" : "text-gray-600"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Night Mode Toggle */}
              <Card className="mt-4 rounded-lg border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">
                      Night Mode
                    </span>
                    <Switch className="data-[state=unchecked]:bg-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};