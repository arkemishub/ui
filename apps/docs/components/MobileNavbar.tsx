"use client";

import Image from "next/image";
import { Button, Drawer } from "@arkejs/ui";
import { MenuSquareIcon } from "lucide-react";
import { useState } from "react";
import sidebar from "@/config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b-background-400 bg-background sticky top-0 z-30 flex items-center justify-between border-b-2 p-4 md:hidden">
      <Button className="bg-background-400 p-2" onClick={() => setOpen(true)}>
        <MenuSquareIcon className="h-6 w-6" />
      </Button>

      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <p className="font-semibold">arkejs/ui</p>
      </div>

      <Drawer className="w-3/4" open={open} onClose={() => setOpen(false)}>
        <div>
          {sidebar.map(({ title, href }, index) =>
            href ? (
              <Link
                onClick={() => setOpen(false)}
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
      </Drawer>
    </header>
  );
}

export default MobileNavbar;
