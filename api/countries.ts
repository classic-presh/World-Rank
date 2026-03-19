"use server";

import { apiFetch } from "@/lib/apiFetch";

export async function getCountries() {
  const data = await apiFetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,unMember,independent,region,area,cca3",
  );

  return data;
}
