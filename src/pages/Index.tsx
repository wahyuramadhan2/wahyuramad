import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import LoadingScreen from "@/components/LoadingScreen";
import PageSkeleton from "@/components/skeletons/PageSkeleton";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smoother transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <Helmet>
        <title>Mochammad Wahyu Ramadhan | Psychology & Data Enthusiast</title>
        <meta 
          name="description" 
          content="Portfolio Mochammad Wahyu Ramadhan - Mahasiswa Psikologi dengan minat di Data Science, Teknologi, dan Perilaku Manusia. Surabaya, Indonesia." 
        />
        <meta name="keywords" content="Mochammad Wahyu Ramadhan, Psikologi, Data Science, Portfolio, Surabaya, Cognitive Psychology" />
        <meta property="og:title" content="Mochammad Wahyu Ramadhan | Portfolio" />
        <meta property="og:description" content="Psychology Student with Interest in Data, Technology, and Human Behavior" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wahyuramadhan2.github.io/wahyuramad/" />
      </Helmet>

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`min-h-screen bg-background ${isLoading ? "overflow-hidden" : ""}`}>
        {!showContent ? (
          <PageSkeleton />
        ) : (
          <>
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <EducationSection />
              <ContactSection />
            </main>
            <Footer />
            <BackToTopButton />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
