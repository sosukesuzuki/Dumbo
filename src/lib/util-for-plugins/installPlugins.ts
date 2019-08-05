import child_process from "child_process";
import { promisify } from "util";
import readDumborc from "./readDumborc";
import getDumboDirpath from "./getDumboDirpath";
import { isExists } from "../fs/stat";
import { join } from "path";

const exec = promisify(child_process.exec);

export default async function(): Promise<void> {
  const { plugins } = await readDumborc();

  if (plugins.length === 0) {
    return;
  }

  let stringifiedPlugins = "";
  for (let i = 0; i < plugins.length; i++) {
    stringifiedPlugins = `${stringifiedPlugins}${i === 0 ? "" : " "}${
      plugins[i]
    }`;
  }

  const dumboDirpath = getDumboDirpath();
  const dumboPluginspath = join(dumboDirpath, "/plugins");
  const isExistsPackageJson = await isExists(
    join(dumboPluginspath, "package.json")
  );

  try {
    if (isExistsPackageJson) {
      await exec(
        `cd ${dumboDirpath} && npm install --save-dev ${stringifiedPlugins}`
      );
    } else {
      await exec(
        `cd ${dumboPluginspath} && npm init -y && npm install --save ${stringifiedPlugins}`
      );
    }
  } catch (error) {
    throw error;
  }
}
