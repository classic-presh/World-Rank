import CountryInfoCard from "@/components/country-info-card";
import CountryInfoCardSkeleton from "@/components/country-info-card-skeleton";
import Header from "@/components/header";
import type { CountryInfo } from "@/types";
import { Suspense } from "react";

// export async function generateStaticParams() {
//   const countries: Country[] = await getCountries();
//   return countries.slice(0, 10).map((country) => ({
//     country: `${country.name.common.toLocaleLowerCase()}-${country.cca3}`,
//   }));
// }

export const dynamic = "force-dynamic";

export default async function CountryInfo({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  return (
    <div>
      <Header infoPage={true} />
      <div className="block bg-[#16181a] md:w-full h-max md:flex justify-center sm:pb-22">
        <Suspense fallback={<CountryInfoCardSkeleton />}>
          <CountryInfoCard params={params} />
        </Suspense>
      </div>
    </div>
  );
}
