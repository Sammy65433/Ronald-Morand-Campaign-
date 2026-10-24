import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CommunityMarquee from "../components/CommunityMarquee";
import CampaignSpotlight from "../components/CampaignSpotlight";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CommunityMarquee variant="about" />
      <CampaignSpotlight />
      <SupportSection />
      <Footer />
    </>
  );
}

export default Home;
