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
    await exec(
      `cd ${dumboDirpath} ${
        isExistsPackageJson
          ? ""
          : "&& rm -rf ./node_modules ./package-lock.json && npm init -y"
      } && npm install --save-dev ${stringifiedPlugins}`
    );
  } catch (error) {
    throw error;
  }
}
