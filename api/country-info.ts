"use server";

import { apiFetch } from "@/lib/apiFetch";
export async function getCountryInfo(code: string) {
  const data = await apiFetch(`https://restcountries.com/v3.1/alpha/${code}`);
  return data[0];
}
