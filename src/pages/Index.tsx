import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
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
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <Helmet>
        <title>Mochammad Wahyu Ramadhan | Psychology & Data Science</title>
        <meta 
          name="description" 
          content="Portfolio Mochammad Wahyu Ramadhan - Mahasiswa Psikologi Universitas Negeri Surabaya dengan keahlian di Data Science, Machine Learning, dan Cognitive Psychology." 
        />
        <meta name="keywords" content="Mochammad Wahyu Ramadhan, Psikologi, Data Science, Machine Learning, Portfolio, Surabaya, Cognitive Psychology, Data Analytics" />
        <meta property="og:title" content="Mochammad Wahyu Ramadhan | Psychology & Data Science" />
        <meta property="og:description" content="Mahasiswa Psikologi dengan keahlian di Data Science, Machine Learning, dan Cognitive Psychology." />
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
              <ProjectsSection />
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
