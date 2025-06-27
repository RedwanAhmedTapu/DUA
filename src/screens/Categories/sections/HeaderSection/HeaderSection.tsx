"use client";

import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import ThermoManIcon from "../../../../assets/thermoManIcon.png";

interface Category {
  id: number;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
}

interface Subcategory {
  id: number;
  subcat_name_en: string;
}

export const HeaderSection = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Record<number, Subcategory[]>>({});
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://duabackend-jveg.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          // Don't automatically expand the first category
          // Let the user click to expand
        }
      });
  }, []);

  const fetchSubcategories = (catId: number) => {
    // Only fetch if we haven't already loaded these subcategories
    if (!subcategories[catId]) {
      fetch(`https://duabackend-jveg.onrender.com/subcategories?category_id=${catId}`)
        .then((res) => res.json())
        .then((data) => {
          setSubcategories(prev => ({
            ...prev,
            [catId]: data
          }));
        });
    }
  };

  const handleAccordionToggle = (categoryId: number) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
    } else {
      setExpandedCategoryId(categoryId);
      fetchSubcategories(categoryId);
    }
  };

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
            className="w-full"
            value={expandedCategoryId ? `item-${expandedCategoryId}` : undefined}
            onValueChange={(value) => {
              const id = value ? parseInt(value.replace('item-', '')) : null;
              setExpandedCategoryId(id);
              if (id) fetchSubcategories(id);
            }}
          >
            {categories.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger
                  className={`p-0 hover:no-underline`}
                >
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 w-full hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        className="w-6 h-6 md:w-8 md:h-8 object-cover"
                        alt="Category icon"
                        src={ThermoManIcon}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <div className="font-medium text-gray-800 text-xs md:text-sm">
                        {item.cat_name_en}
                      </div>
                      <div className="text-gray-500 text-xs">
                        Subcategory: {item.no_of_subcat}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <div className="font-semibold text-gray-800 text-xs md:text-sm">
                        {item.no_of_dua}
                      </div>
                      <div className="text-gray-500 text-xs">Duas</div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-0 pb-0">
                  <div className="flex items-start gap-3 md:gap-4 pl-3 md:pl-4 relative w-full">
                    <div className="flex flex-col items-center relative">
                      <div
                        className="w-0.5 h-full absolute top-0 left-1/2 transform -translate-x-1/2"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(to bottom, #1ea45a 0px, #1ea45a 2px, transparent 2px, transparent 6px)",
                        }}
                      />
                      {subcategories[item.id]?.map((subcategory, idx) => (
                        <div
                          key={subcategory.id}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full z-10 bg-[#1ea45a]`}
                          style={{ marginTop: idx === 0 ? "8px" : "24px" }}
                        />
                      ))}
                    </div>

                    <div className="flex flex-col w-full">
                      {subcategories[item.id]?.map((subcategory) => (
                        <div
                          key={subcategory.id}
                          className="py-1 md:py-2 cursor-pointer hover:bg-gray-50 rounded transition-colors duration-200"
                        >
                          <div className="text-xs md:text-sm font-medium text-gray-700">
                            {subcategory.subcat_name_en}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};