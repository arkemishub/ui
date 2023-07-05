import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "@/components/Mdx";
import TableOfContents from "@/components/TableOfContents";
import Pagination from "@/components/Pagination";

export const generateStaticParams = async () =>
  allDocs.map((doc) => doc.path.split("/"));

const DocPage = async ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocs.find((doc) => doc.path === params.slug.join("/"));

  if (!doc) {
    return notFound();
  }

  return (
    <>
      <div className="flex gap-8">
        <div className="grow">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold">{doc.title}</h1>
          </div>
          <Mdx code={doc.body.code} />
          <Pagination />
        </div>
        <TableOfContents headings={doc.headings} />
      </div>
    </>
  );
};

export default DocPage;
