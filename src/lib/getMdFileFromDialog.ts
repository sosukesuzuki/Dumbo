import { remote } from "electron";

export default async function(): Promise<string[] | undefined> {
  return remote.dialog.showOpenDialog({
    properties: ["openFile"],
    title: "Select a Markdown file",
    filters: [
      {
        name: "Markdown File",
        extensions: ["md", "markdown"]
      }
    ]
  });
}
