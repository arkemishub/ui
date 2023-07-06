import { visit } from "unist-util-visit";
import fs from "fs";
import path from "path";
import { u } from "unist-builder";

export function rehypeComponentToRawCode() {
  return async (tree: any) => {
    visit(tree, (node: any) => {
      if (node.name === "Preview") {
        const componentName = node.attributes?.find(
          (attr: any) => attr.name === "name"
        )?.value;

        if (!componentName) {
          return null;
        }

        const src = path.join(
          process.cwd(),
          "examples",
          componentName + ".tsx"
        );

        const sourceCode = fs.readFileSync(src, "utf-8");
        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __src__: src,
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: sourceCode,
                  },
                ],
              }),
            ],
          })
        );
      }
    });
  };
}
