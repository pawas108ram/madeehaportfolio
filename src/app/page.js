import Image from "next/image";
import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ProfilesSection from "./components/ProfilesSection";

export default function Home() {
  return (
    <main className="h-full w-full flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProfilesSection />
      </div>
    </main>
  );
}
