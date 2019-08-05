import { join } from "path";
import readFile from "../fs/readFile";
import stat from "../fs/stat";

type Dumborc = {
  plugins: string[];
};

export default async function(): Promise<Dumborc> {
  const homeDir =
    process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];

  const dumborcpath = join(homeDir, "/.dumbo", "/dumborc.json");

  let isExists: boolean = false;
  try {
    await stat(dumborcpath);
    isExists = true;
  } catch (error) {
    if (error.code === "ENOENT") {
      isExists = false;
    }
  }

  if (isExists) {
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
