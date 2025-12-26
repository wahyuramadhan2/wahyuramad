import { Skeleton } from "@/components/ui/skeleton";

interface SectionSkeletonProps {
  variant?: "about" | "skills" | "experience" | "education" | "contact";
}

const SectionSkeleton = ({ variant = "about" }: SectionSkeletonProps) => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-48 mx-auto mb-6" />
          <Skeleton className="h-1 w-12 mx-auto" />
        </div>

        {/* Content based on variant */}
        {variant === "about" && (
          <div className="max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-20 rounded-xl" />
              ))}
            </div>
          </div>
        )}

        {variant === "skills" && (
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[1, 2, 3].map((col) => (
              <div key={col} className="space-y-4">
                <Skeleton className="h-6 w-32 mb-8" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-14 rounded-xl" />
                ))}
              </div>
            ))}
          </div>
        )}

        {variant === "experience" && (
          <div className="max-w-2xl mx-auto space-y-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-48 rounded-2xl" />
            ))}
          </div>
        )}

        {variant === "education" && (
          <div className="max-w-2xl mx-auto space-y-6">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        )}

        {variant === "contact" && (
          <div className="max-w-xl mx-auto">
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            <div className="flex justify-center gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-12 rounded-full" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionSkeleton;
