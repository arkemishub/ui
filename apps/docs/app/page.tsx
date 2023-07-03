import Link from "next/link";
import { allDocs } from "contentlayer/generated";

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold">Next.js Example</h1>

      {allDocs.map((doc, idx) => (
        <Link href={doc.path}>{doc.title}</Link>
      ))}
    </div>
  );
}
