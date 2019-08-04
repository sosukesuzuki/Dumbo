import prettier from "prettier/standalone";
import markdown from "prettier/parser-markdown";

export default function(text: string): string {
  return prettier.format(text, {
    parser: "markdown",
    plugins: [markdown]
  });
}
