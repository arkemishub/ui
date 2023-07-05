import sidebar from "@/config/sidebar";
import Link from "next/link";

function Sidebar() {
  return (
    <aside className="w-[300px] p-4">
      {sidebar.map(({ title, href }, index) =>
        href ? (
          <Link
            key={index}
            href={href}
            className="text-neutral block py-1 text-sm hover:underline"
          >
            {title}
          </Link>
        ) : (
          <span className="mb-4 mt-6 block first:mb-4 first:mt-0" key={index}>
            {title}
          </span>
        )
      )}
    </aside>
  );
}

export default Sidebar;
