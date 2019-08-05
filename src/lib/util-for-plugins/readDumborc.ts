import { join } from "path";
import readFile from "../fs/readFile";
import { isExists } from "../fs/stat";
import getDumboDirpath from "./getDumboDirpath";

type Dumborc = {
  plugins: string[];
};

export default async function(): Promise<Dumborc> {
  const dumborcpath = join(getDumboDirpath(), "/dumborc.json");

  const isExistsDumborc = await isExists(dumborcpath);

  if (isExistsDumborc) {
    const value = await readFile(dumborcpath, "utf8");
    const dumborc = JSON.parse(value);

    if (
      dumborc["plugins"] &&
      Array.isArray(dumborc["plugins"]) &&
      Object.keys(dumborc).length === 1
    ) {
      return dumborc as Dumborc;
    }
  }

  return {
    plugins: []
  };
}
