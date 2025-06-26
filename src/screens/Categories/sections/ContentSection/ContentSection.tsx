import React from "react";
import { 
  Play, 
  Copy, 
  Bookmark, 
  Share2, 
  MoreHorizontal 
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentSection = (): JSX.Element => {
  const contentItems = [
    {
      id: 1,
      title: "The servant is dependent on his Lord #1",
      content: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
      hasAudio: false,
    },
    {
      id: 2,
      title: "Conditions for Dua to be successful",
      content: 'Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): "And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure." (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.',
      arabicText: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، اللهم لا مانع لما أعطيت ولا معطي لما منعت ولا ينفع ذا الجد منك الجد",
      transliteration: "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
      translation: "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
      reference: "Bukhari: 844",
      hasAudio: true,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
      {/* Section Header Card */}
      <Card className="w-full border border-gray-200 rounded-lg shadow-sm">
        <CardContent className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4">
          <span className="font-semibold text-[#1ea45a] text-sm md:text-base">
            Section:
          </span>
          <span className="font-medium text-gray-800 text-sm md:text-base">
            The servant is dependent on his Lord
          </span>
        </CardContent>
      </Card>

      {/* Content Cards */}
      {contentItems.map((item) => (
        <Card
          key={item.id}
          className="w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardContent className="flex flex-col items-start gap-4 md:gap-6 px-4 py-4 md:px-6 md:py-6">
            {/* Content Header */}
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <div className="flex items-center gap-3 w-full">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1ea45a] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm md:text-base">{item.id}</span>
                </div>
                <div className="font-semibold text-[#1ea45a] text-sm md:text-base">
                  {item.title}
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full font-normal text-gray-700 text-sm md:text-base leading-relaxed">
                {item.content}
              </div>

              {/* Arabic Text (if available) */}
              {item.arabicText && (
                <div className="w-full font-normal text-gray-800 text-xl md:text-2xl leading-[40px] md:leading-[60px] bg-gray-50 p-4 md:p-6 rounded-lg text-right">
                  {item.arabicText}
                </div>
              )}

              {/* Transliteration and Translation (if available) */}
              {item.transliteration && (
                <div className="flex flex-col items-start justify-center gap-2 md:gap-3 w-full bg-gray-50 p-4 md:p-6 rounded-lg">
                  <div className="w-full font-normal text-gray-700 text-sm md:text-base leading-relaxed">
                    <span className="font-semibold">Transliteration: </span>
                    <span className="italic">{item.transliteration}</span>
                  </div>

                  <div className="w-full font-normal text-gray-700 text-sm md:text-base leading-relaxed">
                    <span className="font-semibold">Translation: </span>
                    <span>{item.translation}</span>
                  </div>
                </div>
              )}

              {/* Reference */}
              <div className="w-full font-normal text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-[#1ea45a]">
                  Reference:
                </span>
                <span className="font-medium text-gray-700 ml-2">
                  {item.reference}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full items-center justify-between">
              {/* Audio Button (if available) */}
              {item.hasAudio && (
                <Button className="w-10 h-10 md:w-12 md:h-12 bg-[#1ea45a] rounded-full p-0 hover:bg-[#168a4a] transition-colors duration-200">
                  <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white ml-0.5" />
                </Button>
              )}

              {/* Action Icons */}
              <div className={`inline-flex items-center justify-end gap-4 md:gap-8 ${!item.hasAudio ? "w-full" : ""}`}>
                <Copy className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <Bookmark className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <Share2 className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
                <MoreHorizontal className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#1ea45a] hover:scale-110 transition-all duration-200" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};