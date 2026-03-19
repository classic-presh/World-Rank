import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function CountryInfoCardSkeleton() {
  return (
    <Card
      className="bg-[#1B1D1F] md:rounded-xl rounded-none border border-[#282b30] text-[#d2d5da] overflow-visible
      md:w-180 w-full -mt-16 pb-0 animate-pulse"
    >
      <div className="mx-auto -mt-16 flex flex-col items-center gap-8 px-4">
        <Skeleton className="w-65 h-50 rounded-xl" />

        <div className="text-center space-y-2">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-5 w-64 mx-auto" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-10 gap-7 mx-auto mt-5">
        <div className="flex gap-6 items-center justify-center bg-[#282b30] py-2 px-5 rounded-xl">
          <Skeleton className="h-4 w-20" />
          <span className="bg-[#1b1d1f] rounded-full w-px h-10"></span>
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="flex gap-6 items-center justify-center bg-[#282b30] py-2 px-5 rounded-xl">
          <Skeleton className="h-4 w-20" />
          <span className="bg-[#1b1d1f] rounded-full w-px h-10"></span>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <div className="mt-7">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-t border-[#282b30] flex items-center justify-between px-4 py-6"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-40" />
          </div>
        ))}

        <div className="pt-6 px-4 mb-10 border-t border-[#282b30]">
          <Skeleton className="h-5 w-48 mb-5" />

          <div className="flex gap-4 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2 w-20">
                <Skeleton className="w-full h-16 rounded" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
