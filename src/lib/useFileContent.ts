import fs from "fs";
import { useContext, useState, useEffect } from "react";
import FileContext from "./FileContext";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default function(): null | string {
  const { filepath } = useContext(FileContext);
  const [fileContent, setFileContent] = useState<null | string>(null);

  useEffect(() => {
    if (filepath != null) {
      readFile(filepath, "utf8").then(value => {
        setFileContent(value);
      });

      const watcher = fs.watch(filepath, { encoding: "utf8" });
      watcher.on("change", (eventType, filename) => {
        if (eventType === "change" && filename) {
          readFile(filename, "utf8").then(value => {
            setFileContent(value);
          });
        }
      });
    }
  }, [filepath]);

  return fileContent;
}
