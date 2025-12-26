import HeroSkeleton from "./HeroSkeleton";
import SectionSkeleton from "./SectionSkeleton";

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Navbar skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-40 h-20 bg-background/50 backdrop-blur-sm">
        <div className="container h-full flex items-center justify-between">
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-16 bg-muted rounded" />
            ))}
          </div>
          <div className="h-10 w-24 bg-muted rounded-full" />
        </div>
      </nav>

      <HeroSkeleton />
      <SectionSkeleton variant="about" />
      <div className="bg-card">
        <SectionSkeleton variant="skills" />
      </div>
      <SectionSkeleton variant="experience" />
      <div className="bg-card">
        <SectionSkeleton variant="education" />
      </div>
      <SectionSkeleton variant="contact" />
    </div>
  );
};

export default PageSkeleton;
