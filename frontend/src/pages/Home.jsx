import Hero from "../components/Hero";
import CommunityMarquee from "../components/CommunityMarquee";
import CampaignSpotlight from "../components/CampaignSpotlight";
import SupportSection from "../components/SupportSection";

function Home() {
  return (
    <>
      <Hero />
      <CommunityMarquee variant="about" />
      <CampaignSpotlight />
      <SupportSection />
    </>
  );
}

export default Home;
