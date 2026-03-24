import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GamesGrid from "@/components/GamesGrid";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Categories />
      <GamesGrid />
      <Footer />
    </div>
  );
};

export default Index;
