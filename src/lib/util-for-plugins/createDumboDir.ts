import { isExists } from "../fs/stat";
import getDumboDirpath from "./getDumboDirpath";
import mkdir from "../fs/mkdir";
import { join } from "path";

async function createPluginsDir(): Promise<void> {
  const dumboDirpath = await getDumboDirpath();
  const pluginsDirpath = join(dumboDirpath, "/plugins");
  const isExistsPluginsDir = await isExists(pluginsDirpath);

  if (isExistsPluginsDir) {
    return;
  } else {
    await mkdir(pluginsDirpath);
  }
}

export default async function(): Promise<void> {
  const dumboDirpath = await getDumboDirpath();
  const isExistsDumboDir = await isExists(dumboDirpath);

  if (!isExistsDumboDir) {
    await mkdir(dumboDirpath);
  }

  await createPluginsDir();
}
