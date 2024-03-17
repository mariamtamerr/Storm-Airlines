import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Icons from "@/components/Icons";
import Carousal from "@/components/Testimonials/Carousal";
import Tours from "@/components/Tours";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Icons/>
    <Tours/>
    <Gallery/>
    <Carousal/>
    <Footer/>
  </div>
  );
}
