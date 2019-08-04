import format from "./format";
import writeFile from "./writeFile";
import readFile from "./readFile";

export default async function(filepath: string): Promise<void> {
  const value = await readFile(filepath, "utf8");
  const formatted = format(value);
  if (value === formatted) return;
  await writeFile(filepath, formatted);
}
