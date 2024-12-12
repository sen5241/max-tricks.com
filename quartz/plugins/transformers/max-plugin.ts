import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"

export const FormatMaxObjects: QuartzTransformerPlugin = () => ({
  name: "FormatMaxObjects",
  markdownPlugins() {
    return [
      () => (tree: Root, _file) => {
        visit(tree, "code", (node) => {
          if (node.lang === "max-object") {
            node.type = "html" as "code"
            node.value = `<code class="max-object">${node.value}</code>` // MAXOBJ: 
          }

          if (node.lang === "max-message") {
            node.type = "html" as "code"
            node.value = `<code class="max-message">${node.value}</code>` // MAXMESS: 
          }

        })
      },
    ]
  },
})