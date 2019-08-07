import { readFileSync } from "fs";
import { join } from "path";
import { Themes, Colors, themes } from "./themes";

export type Configuration = {
  theme: keyof Themes;
};

const defaultConfig: Configuration = {
  theme: "DEFAULT"
};
Object.freeze(defaultConfig);

export default class ConfigManager {
  readonly config: Configuration = this.readConfig();

  get theme(): Colors {
    return themes[this.config.theme];
  } 

  private readConfig(): Configuration {
    const configFilePath = join(this.homeDirPath, "/.dumbo", "/dumborc.json");
    const configString = readFileSync(configFilePath, "utf8");
    const config = JSON.parse(configString);

    if (this.isValidConfig(config)) {
      return config;
    } else {
      this.throwInvalidConfigExeption();
      return defaultConfig;
    }
  }

  private throwInvalidConfigExeption() {
    console.error(".dumborc is invalid");
  }

  private isValidConfig(config: any): boolean {
    const theme = config["theme"];
    if (typeof theme === "string") {
      if (Object.keys(config).length === Object.keys(defaultConfig).length) {
        return true;
      }
    }
    return false;
  }

  private get homeDirPath(): string {
    return process.env[
      process.platform == "win32" ? "USERPROFILE" : "HOME"
    ] as string;
  }
}
