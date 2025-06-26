import { Layout } from "../../components/layout/Layout";
import { ContentSection } from "./sections/ContentSection";
import { HeaderSection } from "./sections/HeaderSection";

export const Categories = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-screen p-4 md:p-6">
        {/* Categories sidebar: 100% width on small screens, fixed width on larger */}
        <div className="w-full md:w-[350px] shrink-0">
          <HeaderSection />
        </div>

        {/* Main content */}
        <div className="flex-1">
          <ContentSection />
        </div>
      </div>
    </Layout>
  );
};
