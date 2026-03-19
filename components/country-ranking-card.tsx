"use client";

import { SearchIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "./ui/label";
import { Field, FieldGroup } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { useCountries } from "@/context/countries-context";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CountryRankingCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    filters,
    foundCountries,
    currentPage,
    setSearchQuery,
    setSortBy,
    setStatus,
    setSelectedRegions,
    setCurrentPage,
  } = useCountries();

  useEffect(() => {
    setCurrentPage(1);
  }, [
    filters.selectedRegions,
    filters.searchQuery,
    filters.sortBy,
    filters.status,
    setCurrentPage,
  ]);

  const pathname = usePathname();

  useEffect(() => {
    setSearchQuery("");
  }, [pathname, setSearchQuery]);

  return (
    <Card className="bg-[#1B1D1F] md:px-8 px-4 md:pt-6 pt-8 sm:rounded-xl rounded-none border border-[#282B30] md:-mt-18 -mt-34 sm:w-[95%] w-full shadow-xl ">
      <div className="flex flex-col md:gap-0 gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-[#D2D5DA] text-lg font-semibold">
          Found {foundCountries} countries
        </h2>
        <div className="relative xl:w-[32%] lg:w-[40%] md:w-1/2 w-full text-[#D2D5DA] font-semibold">
          <SearchIcon className="size-5 absolute left-3 top-0 translate-y-[65%]" />
          <Input
            value={filters.searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              console.log(currentPage);
              console.log(e.target.value);
            }}
            placeholder="Search by Name, Region, Subregion"
            className="text-[#D2D5DA] pl-10 h-12 bg-[#282B30] border-none outline-none text-sm!"
          />
        </div>
      </div>

      <div className="h-full flex md:flex-row flex-col gap-10 mt-8">
        <div className="md:w-[30%] xl:w-[25%] w-full md:h-full flex flex-col md:gap-12 gap-8">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[#d2d5da] text-sm">Sort by</p>
            <Select
              value={filters.sortBy}
              onValueChange={(val) => {
                setSortBy(val);
              }}
            >
              <SelectTrigger className="text-[16px] w-full h-12! border-[#282B30] text-[#D2D5DA] border-2 pl-4 rounded-xl ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className=" bg-[#282b30] text-[#d2d5da] ">
                <SelectGroup>
                  <SelectItem value="population">Population</SelectItem>
                  <SelectItem value="alphabetical-order">
                    Alphabetical Order
                  </SelectItem>
                  <SelectItem value="area">Area(km²)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#d2d5da] text-sm">Region</p>
            <ToggleGroup
              type="multiple"
              value={[...filters.selectedRegions]}
              onValueChange={(val) => {
                setSelectedRegions([...val]);
                console.log(filters.selectedRegions);
              }}
              className="flex flex-wrap gap-3"
            >
              <ToggleGroupItem
                value="americas"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Americas
              </ToggleGroupItem>

              <ToggleGroupItem
                value="antarctic"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Antarctic
              </ToggleGroupItem>

              <ToggleGroupItem
                value="africa"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Africa
              </ToggleGroupItem>

              <ToggleGroupItem
                value="asia"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Asia
              </ToggleGroupItem>

              <ToggleGroupItem
                value="europe"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Europe
              </ToggleGroupItem>

              <ToggleGroupItem
                value="oceania"
                className="text-[16px] rounded-xl! lg:px-4! px-3! border-[#282B30] text-[#D2D5DA] h-10 [@media(hover:hover)]:hover:bg-[#282b30] hover:text-[#d2d5da] data-[state=on]:bg-[#282b30] "
              >
                Oceania
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#d2d5da] text-sm">Status</p>
            <FieldGroup className="flex flex-col gap-4">
              <Field className="flex flex-row gap-4">
                <Checkbox
                  id="all"
                  checked={filters.status === "all"}
                  onCheckedChange={() => {
                    setStatus("all");
                  }}
                  className="w-6.5! h-6.5! cursor-pointer border-2 border-[#d2d5da] bg-[#1b1d1f] data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 "
                />
                <Label
                  htmlFor="all"
                  className="text-sm text-[#d2d5da] cursor-pointer "
                >
                  All
                </Label>
              </Field>
              <Field className="flex flex-row gap-4 ">
                <Checkbox
                  id="united-nations"
                  checked={filters.status === "united-nations"}
                  onCheckedChange={() => {
                    setStatus("united-nations");
                  }}
                  className="w-6.5! h-6.5! cursor-pointer border-2 border-[#d2d5da] bg-[#1b1d1f] data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 "
                />
                <Label
                  htmlFor="united-nations"
                  className="text-sm text-[#d2d5da] cursor-pointer "
                >
                  Members of the United Nations
                </Label>
              </Field>
              <Field className="flex flex-row gap-4">
                <Checkbox
                  id="independent"
                  checked={filters.status === "independent"}
                  onCheckedChange={() => {
                    setStatus("independent");
                  }}
                  className="w-6.5! h-6.5! cursor-pointer border-2 border-[#d2d5da] bg-[#1b1d1f] data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 "
                />
                <Label
                  htmlFor="independent"
                  className="text-sm text-[#d2d5da] cursor-pointer "
                >
                  Independent
                </Label>
              </Field>
              <Field className="flex flex-row gap-4">
                <Checkbox
                  id="territories"
                  checked={filters.status === "territories"}
                  onCheckedChange={() => {
                    setStatus("territories");
                  }}
                  className="w-6.5! h-6.5! cursor-pointer border-2 border-[#d2d5da] bg-[#1b1d1f] data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 "
                />
                <Label
                  htmlFor="territories"
                  className="text-sm text-[#d2d5da] cursor-pointer "
                >
                  Territories
                </Label>
              </Field>
            </FieldGroup>
          </div>
        </div>
        <div className="flex-1 h-max">{children}</div>
      </div>
    </Card>
  );
}
