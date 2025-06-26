import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";

export const SidebarSection = (): JSX.Element => {
  // Settings menu items data
  const menuItems = [
    {
      id: "language",
      title: "Language Settings",
      icon: "/frame-2.svg",
      isActive: false,
    },
    {
      id: "general",
      title: "General Settings",
      icon: "/frame.svg",
      isActive: false,
    },
    {
      id: "font",
      title: "Font Settings",
      icon: "/54-menu-2.svg",
      isActive: false,
    },
    {
      id: "appearance",
      title: "Appearance Settings",
      icon: "/54-menu-2.svg",
      isActive: true,
    },
  ];

  return (
    <Card className="w-[330px] rounded-[32px] border-[0.5px] border-solid border-[#e2e2e2]">
      <CardContent className="p-5">
        <div className="flex justify-center mb-6 mt-4">
          <h2 className="font-bold text-xl text-[#393939]">Settings</h2>
        </div>

        <div className="space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-[5px] ${
                item.id === "font"
                  ? "bg-[#f7f8fa]"
                  : "bg-[url(/rectangle-28.svg)] bg-[100%_100%]"
              }`}
            >
              {item.isActive && (
                <div className="absolute w-[5px] h-full top-0 left-0 bg-[#1ea45a] rounded-[5px_0px_0px_5px]" />
              )}
              <div className="flex items-center p-[9px]">
                <div className="w-[38px] h-[38px] bg-[#e8f0f5] rounded-[19px] flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt={`${item.title} icon`}
                    src={item.icon}
                  />
                </div>
                <span
                  className={`ml-[13px] font-${
                    item.isActive ? "medium" : "normal"
                  } text-base ${
                    item.isActive ? "text-[#1ea45a]" : "text-[#858585]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}

          {/* Night Mode Toggle - Only shown when Appearance Settings is active */}
          <Card className="mt-2 rounded-[5px] border-[0.5px] border-solid border-[#e2e2e2]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-normal text-[#393939] text-base">
                  Night Mode
                </span>
                <Switch className="data-[state=unchecked]:bg-neutral-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
