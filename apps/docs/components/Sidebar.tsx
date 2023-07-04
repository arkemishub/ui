import sidebar from "@/config/sidebar";
import Link from "next/link";

function Sidebar() {
  return (
    <aside className="w-[200px] p-4">
      {sidebar.map(({ title, href }, index) =>
        href ? (
          <Link
            key={index}
            href={href}
            className="text-neutral block text-sm hover:underline"
          >
            {title}
          </Link>
        ) : (
          <span className="mb-2 block" key={index}>
            {title}
          </span>
        )
      )}
    </aside>
  );
}

export default Sidebar;
