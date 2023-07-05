function TableOfContents({
  headings,
}: {
  headings: Array<{ content: string; href: string }>;
}) {
  return (
    <div className="mt-20 w-full max-w-[260px] border-l-2 border-l-background-400 pl-8">
      <p className="mb-2 font-semibold">Table of Contents</p>
      <ul>
        {headings.map(({ href, content }) => (
          <li key={href}>
            <a
              className="text-sm text-neutral hover:underline"
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
