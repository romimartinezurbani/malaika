import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Products from "../components/Products";
import Accompaniment from "../components/Accompaniment";
import Experiences from "../components/Experiences";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Products />
      <Accompaniment />
      <Experiences />
      <Testimonials />
      <About />
      <FinalCTA />
    </>
  );
}


