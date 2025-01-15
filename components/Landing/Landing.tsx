import Appointment from "./Appointment";
import Experience from "./Experience";
import Hero from "./Hero";
import LandingAbout from "./LandingAbout";
import Service from "./Service";

export default function Landing() {
  return (
    <>
      <Hero />
      <LandingAbout />
      <Experience />
      <Service />
      <Appointment />
    </>
  );
}
