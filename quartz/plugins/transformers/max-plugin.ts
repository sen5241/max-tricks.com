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
            node.value = `<code class="max-object">MAXOBJ: ${node.value}</code>`
          }

          if (node.lang === "max-message") {
            node.type = "html" as "code"
            node.value = `<code class="max-message">MAXMESS: ${node.value}</code>`
          }

        })
      },
    ]
  },
})