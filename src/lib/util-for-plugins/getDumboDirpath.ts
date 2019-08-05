import { join } from "path";

export default function(): string {
  const homeDir = process.env[
    process.platform == "win32" ? "USERPROFILE" : "HOME"
  ] as string;

  const dumboDirpath = join(homeDir, "/.dumbo");

  return dumboDirpath;
}
