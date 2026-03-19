import { CountryInfo } from "@/types";
import { Card } from "./ui/card";
import Image from "next/image";
import { getCountryInfo } from "@/api/country-info";
import Link from "next/link";

export default async function CountryInfoCard({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryCode = country.split("-")[1];

  const countryInfo: CountryInfo = await getCountryInfo(countryCode);

  const borders = Array.isArray(countryInfo.borders) ? countryInfo.borders : [];
  const neighbouringCountries = await Promise.all(
    borders.map((border) => getCountryInfo(border)),
  );

  console.log(neighbouringCountries);

  return (
    <Card
      className="bg-[#1B1D1F] md:rounded-xl rounded-none border border-[#282b30] text-[#d2d5da] overflow-visible
    md:w-180 w-full -mt-16 pb-0"
    >
      <div className=" mx-auto -mt-16 flex flex-col items-center gap-8 px-4">
        <div className="w-65 h-50 relative">
          <Image
            alt={countryInfo.flags.alt ?? ""}
            src={countryInfo.flags.svg}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl ">
            {countryInfo.name.common}
          </h2>
          <p className="md:text-lg sm:text-[16px] text-sm mt-1">
            {countryInfo.name.official}
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-7 mx-auto mt-5">
        <div className="flex gap-6 items-center justify-center bg-[#282b30] py-2 px-5 rounded-xl">
          <p>Population</p>
          <span className="bg-[#1b1d1f] rounded-full w-px h-10"></span>
          <p>{countryInfo.population.toLocaleString()}</p>
        </div>
        <div className="flex gap-6 items-center justify-center bg-[#282b30] py-2 px-5 rounded-xl">
          <p>Area (km²)</p>
          <span className="bg-[#1b1d1f] rounded-full w-px h-10"></span>
          <p>{countryInfo.area.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-7">
        <div className="border-t border-[#282b30] flex gap-18 items-center justify-between px-4 py-6 ">
          <p>Capital</p>
          {countryInfo.capital ? (
            <p>{(countryInfo.capital ?? []).join(", ")}</p>
          ) : (
            <p>&mdash;</p>
          )}
        </div>
        <div className="border-t border-[#282b30] flex gap-18 items-center justify-between px-4 py-6 ">
          <p>Subregion</p>
          {countryInfo.subregion ? (
            <p>{countryInfo.subregion}</p>
          ) : (
            <p>&mdash;</p>
          )}
        </div>
        <div className="border-t border-[#282b30] flex gap-18 items-center justify-between px-4 py-6 ">
          <p>Languages</p>
          {Object.values(countryInfo.languages ?? []).length > 0 ? (
            <p>
              {(Object.values(countryInfo.languages ?? []) ?? []).join(", ")}
            </p>
          ) : (
            <p>&mdash;</p>
          )}
        </div>
        <div className="border-t border-[#282b30] flex gap-18 items-center justify-between px-4 py-6 ">
          <p>Currencies</p>
          {Object.values(countryInfo.currencies ?? []).length > 0 ? (
            <p>
              {(Object.values(countryInfo.currencies ?? []) ?? [])
                .map((currency) => currency.name)
                .join(", ")}
            </p>
          ) : (
            <p>&mdash;</p>
          )}
        </div>
        <div className="border-t border-[#282b30] flex gap-18 items-center justify-between px-4 py-6 ">
          <p>Continents</p>
          {countryInfo.continents ? (
            <p>{(countryInfo.continents ?? []).join(", ")}</p>
          ) : (
            <p>&mdash;</p>
          )}
        </div>
        {countryInfo.borders && (
          <div className="pt-6 px-4 mb-10 border-t border-[#282b30]">
            <p className="mb-5">Neighbouring Countries</p>
            <div className="flex gap-4 flex-wrap">
              {neighbouringCountries.map((country) => (
                <Link
                  key={country.cca3}
                  className="space-y-2 w-20"
                  href={`/countries/${country.name.common.toLocaleLowerCase()}-${country.cca3}`}
                >
                  <div className="relative w-full h-16 ">
                    <Image
                      alt={country.flags.alt ?? ""}
                      src={country.flags.svg}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="wrap-break-word text-xs">
                    {country.name.common}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
