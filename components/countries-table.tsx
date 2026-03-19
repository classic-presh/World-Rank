"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCountries } from "@/context/countries-context";
import { Country } from "@/types";
import { useDeferredValue, useEffect, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CountriesTable({
  countries,
}: {
  countries: Country[];
}) {
  const router = useRouter();

  const { filters, setFoundCountries, currentPage, setCurrentPage } =
    useCountries();

  const deferredFilters = useDeferredValue(filters);

  const filteredCountries = useMemo(() => {
    let filtered = countries;

    if (deferredFilters.selectedRegions.length > 0)
      filtered = filtered.filter((country) =>
        deferredFilters.selectedRegions.includes(country.region.toLowerCase()),
      );

    if (deferredFilters.searchQuery.length > 0) {
      filtered = filtered.filter((country) =>
        country.name.common
          .toLocaleLowerCase()
          .includes(deferredFilters.searchQuery.toLocaleLowerCase()),
      );
    }

    switch (deferredFilters.status) {
      case "united-nations":
        filtered = filtered.filter((country) => country.unMember);
        break;

      case "independent":
        filtered = filtered.filter((country) => country.independent);
        break;

      case "territories":
        filtered = filtered.filter(
          (country) => !country.unMember && !country.independent,
        );
        break;

      case "all":
      default:
        break;
    }

    switch (deferredFilters.sortBy) {
      case "population":
        filtered = [...filtered].sort((a, b) => b.population - a.population);
        break;

      case "area":
        filtered = [...filtered].sort((a, b) => b.area - a.area);
        break;

      case "alphabetical-order":
        filtered = [...filtered].sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [countries, deferredFilters]);

  console.log(filteredCountries);

  useEffect(() => {
    setFoundCountries(filteredCountries.length);
  }, [setFoundCountries, filteredCountries.length]);

  const itemsPerPage = 20;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  function getVisiblePages(
    currentPage: number,
    totalPages: number,
    maxVisible = 7,
  ) {
    const half = Math.floor(maxVisible / 2);

    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 1) {
      start = 1;
      end = Math.min(maxVisible, totalPages);
    }

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(totalPages - maxVisible + 1, 1);
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return { pages, end };
  }

  const { pages: visiblePages, end } = getVisiblePages(currentPage, totalPages);

  return (
    <>
      <Table className="text-[#d2d5da] table-fixed w-full ">
        <TableHeader className="">
          <TableRow className="border-[#282b30]! border-b-2!">
            <TableHead className="w-3/25! px-0 text-[#d2d5da] text-sm pb-5">
              Flag
            </TableHead>
            <TableHead className="text-[#d2d5da] px-0 text-sm w-23/100! pb-5">
              Name
            </TableHead>
            <TableHead className="text-[#d2d5da] px-0 text-sm sm:w-23/100! w-1/4 pb-5 ">
              Population
            </TableHead>
            <TableHead className="text-[#d2d5da] px-0 text-sm sm:w-21/100! w-19/100! pb-5 ">
              Area (km²)
            </TableHead>
            <TableHead className="text-[#d2d5da] hidden xl:table-cell px-0 text-sm w-11/50! pb-5 ">
              Region
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCountries.map((country) => (
            <TableRow
              className="border-none! hover:cursor-pointer hover:bg-[#282b30]"
              key={country.cca3}
              onClick={() =>
                router.push(
                  `/countries/${country.name.common.toLocaleLowerCase()}-${country.cca3}`,
                )
              }
            >
              <TableCell>
                <div className="relative w-11 h-6 sm:w-13 sm:h-9">
                  <Image
                    src={country.flags.svg}
                    alt={country.flags.alt ?? ""}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="max-w-50 whitespace-normal wrap-break-word leading-snug text-xs sm:text-sm">
                {country.name.common}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {country.population.toLocaleString()}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {country.area.toLocaleString()}
              </TableCell>
              <TableCell className="hidden xl:table-cell text-xs sm:text-sm">
                {country.region}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {paginatedCountries.length === 0 && (
        <div className="w-full h-full flex justify-center md:pt-25 pt-8">
          <p className="italic text-[#d2d5da] md:text-xl sm:text-lg text-[16px]">
            No country matches your query
          </p>
        </div>
      )}
      <Pagination className="mt-3 mb-5 bg-[#1b1d1f] text-[#d2d5da]">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              />
            </PaginationItem>
          )}

          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={`${currentPage === page && "text-[#1b1d1fb6]"}`}
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {end < totalPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}
