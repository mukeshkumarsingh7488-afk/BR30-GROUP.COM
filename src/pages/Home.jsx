import TopStrip from "../components/TopStrip.jsx";
import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import Vision from "../components/Vision.jsx";
import Manifesto from "../components/Manifesto.jsx";
import Eligibility from "../components/Eligibility.jsx";
import JoinBanner from "../components/JoinBanner.jsx";
import Contact from "../components/Connect.jsx";

export default function Home() {
  return (
    <>
      <TopStrip />
      <Hero />
      <Marquee />
      <Vision />
      <Manifesto />
      <Eligibility />
      <JoinBanner />
      <Contact />
    </>
  );
}
