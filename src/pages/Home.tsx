import HeroSection from "../components/home/HeroSection";
import CategoryGrid from "../components/home/CategoryGrid";
import FeatureSection from "../components/home/FeatureSection";
import InstagramFeed from "../components/home/InstagramFeed";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryGrid />
      <FeatureSection />
      <InstagramFeed />
    </div>
  );
};

export default Home;
