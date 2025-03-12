import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonial";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Accolades from "../Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <Accolades />
      {/* <AboutMe /> */}
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
