"use client";

import React, { useEffect, useState } from "react";
import {
  Play,
  Copy,
  Bookmark,
  Share2,
  AlertOctagon,
  Lightbulb
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface Dua {
  id: number;
  dua_name_en: string;
  top_en?: string;
  dua_arabic?: string;
  translation_en?: string;
  transliteration_en?: string;
  bottom_en?: string;
  refference_en?: string;
  audio?: string;
}

export const ContentSection = (): JSX.Element => {
  const [duas, setDuas] = useState<Dua[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const subcategoryId = 1; // Can be dynamic

  useEffect(() => {
    fetch(`http://localhost:5000/duas?subcategory_id=${subcategoryId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setDuas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [subcategoryId]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
      {duas.map((item, index) => (
        <Card
          key={item.id}
          className="w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <CardContent className="flex flex-col items-start gap-6 px-6 py-6">
            {/* Header */}
            <div className="flex items-center gap-4 w-full">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1ea45a] rounded-full flex items-center justify-center">
                <span className="text-white text-base md:text-lg">{index + 1}</span>
              </div>
              <div className="font-semibold text-[#1ea45a] text-base md:text-lg">
                {item.dua_name_en}
              </div>
            </div>

            {/* Top English Content */}
            {item.top_en && (
              <div className="w-full font-normal text-gray-700 text-base md:text-lg leading-relaxed">
                {item.top_en}
              </div>
            )}

            {/* Arabic Dua */}
            {item.dua_arabic && (
              <div className="w-full font-normal text-gray-800 text-xl md:text-2xl leading-[40px] md:leading-[60px] bg-gray-50 p-6 rounded-lg text-right">
                {item.dua_arabic}
              </div>
            )}

            {/* Transliteration and Translation */}
            {(item.transliteration_en || item.translation_en) && (
              <div className="flex flex-col gap-4 w-full bg-gray-50 p-6 rounded-lg">
                {item.transliteration_en && (
                  <div className="w-full font-normal text-gray-700 text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">Transliteration: </span>
                    <span className="italic">{item.transliteration_en}</span>
                  </div>
                )}
                {item.translation_en && (
                  <div className="w-full font-normal text-gray-700 text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">Translation: </span>
                    <span>{item.translation_en}</span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Explanation */}
            {item.bottom_en && (
              <div className="w-full font-normal text-gray-700 text-base md:text-lg leading-relaxed">
                {item.bottom_en}
              </div>
            )}

            {/* Reference */}
            {item.refference_en && (
              <div className="w-full font-normal text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-[#1ea45a]">Reference: </span>
                <span className="font-medium text-gray-700 ml-2">{item.refference_en}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex w-full items-center justify-between mt-6">
              {item.audio && (
                <Button className="w-12 h-12 bg-[#1ea45a] rounded-full p-0 hover:bg-[#168a4a] transition-colors duration-200">
                  <Play className="w-5 h-5 text-white fill-white" />
                </Button>
              )}

              <div className={`inline-flex items-center justify-end gap-8 ${!item.audio ? "w-full" : ""}`}>
                <Copy className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <Bookmark className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <Lightbulb className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <Share2 className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <AlertOctagon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
