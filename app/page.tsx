import { getCountries } from "@/api/countries";
import CountriesTable from "@/components/countries-table";
import CountryRankingCard from "@/components/country-ranking-card";
import CountryRankingCardSkeleton from "@/components/country-ranking-card-skeleton";
import Header from "@/components/header";
import { CountriesProvider } from "@/context/countries-context";
import { Country } from "@/types";
import { Suspense } from "react";

export default async function Home() {
  const countries: Country[] = await getCountries();

  return (
    <div>
      <Header />
      <div className="bg-[#16181a] block sm:w-full h-max sm:flex justify-center sm:pb-22">
        <CountriesProvider>
          <Suspense fallback={<CountryRankingCardSkeleton />}>
            <CountryRankingCard>
              {<CountriesTable countries={countries} />}
            </CountryRankingCard>
          </Suspense>
        </CountriesProvider>
      </div>
    </div>
  );
}
