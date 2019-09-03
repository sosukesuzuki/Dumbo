import fs from "fs";
import { dirname } from "path";
import { useContext, useState, useEffect } from "react";
import { FileContext } from "../contexts";
import { readFile } from "../fs";

export function useFileContent(): null | string {
  const { filepath } = useContext(FileContext);
  const [fileContent, setFileContent] = useState<null | string>(null);

  useEffect(() => {
    if (filepath != null) {
      readFile(filepath, "utf8").then(value => {
        setFileContent(value);
      });

      const watcher = fs.watch(filepath, { encoding: "utf8" });
      watcher.on("change", (eventType, filename) => {
        if (eventType === "rename" && filename) {
          readFile(`${dirname(filepath)}/${filename}`, "utf8").then(value => {
            setFileContent(value);
          });
        }
      });
    }
  }, [filepath]);

  return fileContent;
}
