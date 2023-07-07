"use client";

import sidebar from "@/config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-16 z-10 hidden h-[calc(100vh-4rem)] py-8 md:block">
      <div className="relative h-full overflow-hidden">
        <div className="h-full w-full overflow-scroll">
          {sidebar.map(({ title, href }, index) =>
            href ? (
              <Link
                key={index}
                href={href}
                className={twMerge(
                  "text-neutral block py-1 text-sm hover:underline",
                  href === pathname && "text-background-contrast"
                )}
              >
                {title}
              </Link>
            ) : (
              <span
                className="mb-4 mt-6 block first:mb-4 first:mt-0"
                key={index}
              >
                {title}
              </span>
            )
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
