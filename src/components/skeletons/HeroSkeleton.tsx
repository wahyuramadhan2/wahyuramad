import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image skeleton */}
          <div className="mb-8 sm:mb-10 flex justify-center">
            <Skeleton className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full" />
          </div>

          {/* Text skeletons */}
          <Skeleton className="h-5 w-24 mx-auto mb-4" />
          <Skeleton className="h-10 sm:h-12 md:h-14 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-3" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
          <Skeleton className="h-5 w-40 mx-auto mb-10" />

          {/* Button skeletons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 rounded-full mx-auto sm:mx-0" />
            <Skeleton className="h-12 w-32 rounded-full mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
