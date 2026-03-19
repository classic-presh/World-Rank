import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "./ui/pagination";

export default function CountriesTableSkeleton() {
  const rows = Array.from({ length: 10 }); // number of placeholder rows
  const pages = Array.from({ length: 5 }); // placeholder pagination

  return (
    <>
      <Table className="text-[#d2d5da] table-fixed w-full animate-pulse">
        <TableHeader>
          <TableRow className="border-[#282b30]! border-b-2!">
            <TableHead className="w-3/25! px-0 text-sm pb-5">
              <Skeleton className="h-4 w-8" />
            </TableHead>
            <TableHead className="text-sm px-0 w-23/100! pb-5">
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead className="text-sm px-0 sm:w-23/100! w-1/4 pb-5">
              <Skeleton className="h-4 w-20" />
            </TableHead>
            <TableHead className="text-sm px-0 sm:w-21/100! w-19/100! pb-5">
              <Skeleton className="h-4 w-20" />
            </TableHead>
            <TableHead className="text-sm hidden xl:table-cell px-0 w-11/50! pb-5">
              <Skeleton className="h-4 w-24" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((_, i) => (
            <TableRow key={i} className="border-none!">
              <TableCell>
                <Skeleton className="w-11 h-6 sm:w-13 sm:h-9 rounded" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell className="hidden xl:table-cell">
                <Skeleton className="h-4 w-24" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-3 mb-5 bg-[#1b1d1f] text-[#d2d5da]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious isActive={false} />
          </PaginationItem>

          {pages.map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={false}>
                <Skeleton className="h-4 w-6" />
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext isActive={false} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
