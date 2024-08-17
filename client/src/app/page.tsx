import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/global/landingNav";
import HeroSection from "@/components/global/sections/Hero";
import GradientBackground from "@/components/global/GradientBackground";

export default function Home() {
  return (
    <main>
      <Navbar />
      <GradientBackground/>
      <HeroSection/>
    </main>
  );
}

