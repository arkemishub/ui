function TableOfContents({
  headings,
}: {
  headings: Array<{ content: string; href: string }>;
}) {
  return (
    <div className="border-l-background-400 mt-20 w-full max-w-[260px] border-l-2 pl-8">
      <p className="mb-2 font-semibold">Table of Contents</p>
      <ul>
        {headings.map(({ href, content }) => (
          <li key={href}>
            <a
              className="text-neutral text-sm hover:underline"
              href={`#${href}`}
            >
              {content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
