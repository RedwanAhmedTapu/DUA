import { Search } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  const subcategories = [
    { id: 1, name: "What is Dua", isActive: false },
    { id: 2, name: "Conditions for Dua to be successful", isActive: true },
    { id: 3, name: "The Methode Of Dua", isActive: false },
    { id: 4, name: "Before Dua", isActive: false },
    { id: 5, name: "During Dua", isActive: false },
    { id: 6, name: "Prerequisites of writing Dua and drinking it's water", isActive: false },
    { id: 7, name: "The correct way to perform Dua for a small child", isActive: false },
  ];

  const categoryItems = [
    {
      id: 1,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      isExpanded: true,
      iconSrc: "/005-fever-3.png",
    },
    {
      id: 2,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      isExpanded: false,
      iconSrc: "/005-fever-3.png",
    },
    {
      id: 3,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      isExpanded: false,
      iconSrc: "/005-fever-3.png",
    },
  ];

  return (
    <div className="sticky top-16 md:top-20 z-30">
      <Card className="w-full border border-gray-200 rounded-xl md:rounded-2xl shadow-sm overflow-hidden">
        <CardHeader className="p-0">
          <div className="bg-[#1ea45a] py-3 px-4 md:py-4 md:px-6">
            <h2 className="font-semibold text-white text-center text-sm md:text-base">
              Categories
            </h2>
          </div>

          <div className="p-3 md:p-4">
            <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg border border-gray-200 bg-gray-50">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <Input
                className="border-0 shadow-none p-0 h-auto bg-transparent font-normal text-sm md:text-base text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search by Categories"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-3 md:p-4 pt-0">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {categoryItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger
                  className={`p-0 hover:no-underline ${index === 0 ? "hidden" : ""}`}
                >
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 w-full hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        className="w-6 h-6 md:w-8 md:h-8 object-cover"
                        alt="Category icon"
                        src={item.iconSrc}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <div className="font-medium text-gray-800 text-xs md:text-sm">
                        {item.title}
                      </div>
                      <div className="text-gray-500 text-xs">
                        Subcategory: {item.subcategoryCount}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="font-semibold text-gray-800 text-xs md:text-sm">
                        {item.duaCount}
                      </div>
                      <div className="text-gray-500 text-xs">
                        Duas
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                {index === 0 && (
                  <>
                    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 rounded-lg mb-1 md:mb-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <img
                          className="w-6 h-6 md:w-8 md:h-8 object-cover"
                          alt="Category icon"
                          src={item.iconSrc}
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 flex-1">
                        <div className="font-medium text-[#1ea45a] text-xs md:text-sm">
                          {item.title}
                        </div>
                        <div className="text-gray-500 text-xs">
                          Subcategory: {item.subcategoryCount}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="font-semibold text-gray-800 text-xs md:text-sm">
                          {item.duaCount}
                        </div>
                        <div className="text-gray-500 text-xs">
                          Duas
                        </div>
                      </div>
                    </div>

                    <AccordionContent className="pt-0 pb-0">
                      <div className="flex items-start gap-3 md:gap-4 pl-3 md:pl-4 relative w-full">
                        <div className="flex flex-col items-center relative">
                          {/* Dotted vertical line */}
                          <div 
                            className="w-0.5 h-full absolute top-0 left-1/2 transform -translate-x-1/2"
                            style={{
                              backgroundImage: 'repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 2px, transparent 2px, transparent 6px)',
                            }}
                          />
                          {subcategories.map((subcategory, idx) => (
                            <div
                              key={subcategory.id}
                              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full z-10 ${
                                subcategory.isActive ? 'bg-[#1ea45a]' : 'bg-gray-300'
                              }`}
                              style={{ marginTop: idx === 0 ? '8px' : '24px' }}
                            />
                          ))}
                        </div>

                        <div className="flex flex-col w-full">
                          {subcategories.map((subcategory) => (
                            <div
                              key={subcategory.id}
                              className="py-1 md:py-2 cursor-pointer hover:bg-gray-50 rounded transition-colors duration-200"
                            >
                              <div
                                className={`text-xs md:text-sm font-medium ${
                                  subcategory.isActive ? "text-[#1ea45a]" : "text-gray-700"
                                }`}
                              >
                                {subcategory.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};