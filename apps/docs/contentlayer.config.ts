import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { rehypeComponentToRawCode } from "./lib/rehypeComponentToRawCode";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true,
    },
    toc: {
      type: "boolean",
      required: false,
      default: false,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger();
        const regex =
          /\n(?<mdxFlag>#{1,6})\s+(?<mdxContent>.+)|<(?<htmlFlag>h[1-6])>(?<htmlContent>.+)<\/\k<htmlFlag>>/g;

        return Array.from(doc.body.raw.matchAll(regex)).map(({ groups }) => {
          const content = groups?.mdxContent ?? groups?.htmlContent;
          return {
            content,
            href: content ? slugger.slug(content) : undefined,
          };
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponentToRawCode,
      [rehypePrettyCode, { theme: "github-dark" }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }

            for (const child of node.children) {
              if (child.tagName === "pre") {
                child.properties["raw"] = node.raw;
              }
            }
          }
        });
      },
    ],
  },
});
