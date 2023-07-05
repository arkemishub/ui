"use client";

import { usePathname } from "next/navigation";
import sidebar from "@/config/sidebar";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const getPrevNextPages = (pathname: string) => {
  const index = sidebar.findIndex((item) => item.href === pathname);

  return [sidebar[index - 1], sidebar[index + 1]];
};

function Pagination() {
  const pathname = usePathname();

  const [prevPage, nextPage] = getPrevNextPages(pathname);

  return (
    <div className="mt-16 flex items-center">
      {prevPage?.href && (
        <Link className="docs__pagination" href={prevPage.href}>
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          {prevPage.title}
        </Link>
      )}
      {nextPage?.href && (
        <Link className="docs__pagination ml-auto" href={nextPage.href}>
          {nextPage.title}
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
