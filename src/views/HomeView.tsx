import ContentBar from "@/components/feed/ContentBar";
import FeedContent from "@/components/feed/FeedContent";
import FilterBar from "@/components/feed/FilterBar";
import HeroSection from "@/components/feed/HeroSection"

const HomeView = () => {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-107px)] flex flex-col md:flex-row gap-4 p-4 md:p-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Filter Bar */}
      <FilterBar />

      {/* Feed Content */}
      <FeedContent />

      {/* Content Bar */}
      <ContentBar />
    </div>
  );
};

export default HomeView;