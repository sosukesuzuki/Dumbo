import fs from "fs";
import { promisify } from "util";

export async function isExists(filepath: string): Promise<boolean> {
  try {
    await stat(filepath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

const stat = promisify(fs.stat);
export default stat;
