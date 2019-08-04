import format from "./format";
import writeFile from "./fs/writeFile";
import readFile from "./fs/readFile";

export default async function(filepath: string): Promise<void> {
  const value = await readFile(filepath, "utf8");
  const formatted = format(value);
  if (value === formatted) return;
  await writeFile(filepath, formatted);
}
