"use client";

import { Filters } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type CountriesContextType = {
  filters: Filters;
  foundCountries: number;
  currentPage: number;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
  setFoundCountries: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const CountriesContext = createContext<CountriesContextType | null>(null);

export function CountriesProvider({ children }: { children: ReactNode }) {
  const [sortBy, setSortBy] = useState("population");
  const [status, setStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [foundCountries, setFoundCountries] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const value = useMemo(
    () => ({
      filters: { sortBy, status, searchQuery, selectedRegions },
      foundCountries,
      currentPage,
      setSortBy,
      setStatus,
      setSearchQuery,
      setSelectedRegions,
      setFoundCountries,
      setCurrentPage,
    }),
    [sortBy, status, searchQuery, selectedRegions, foundCountries, currentPage],
  );

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  const context = useContext(CountriesContext);

  if (!context)
    throw new Error("useCountries must be used inside CountriesProvider");

  return context;
}
