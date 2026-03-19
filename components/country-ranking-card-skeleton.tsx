import CountriesTableSkeleton from "./countries-table-skeleton";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function CountryRankingCardSkeleton() {
  return (
    <Card className="bg-[#1B1D1F] md:px-8 px-4 md:pt-6 pt-8 sm:rounded-xl rounded-none border border-[#282b30] md:-mt-18 -mt-34 sm:w-[95%] w-full shadow-xl animate-pulse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-12 w-full md:w-1/2 xl:w-[32%] lg:w-[40%]" />
      </div>

      <div className="flex md:flex-row flex-col gap-10 mt-8">
        <div className="md:w-[30%] xl:w-[25%] w-full flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-xl" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-20" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 h-80">
          {Array.from({ length: 5 }).map((_, i) => (
            <CountriesTableSkeleton key={i} />
          ))}
        </div>
      </div>
    </Card>
  );
}
