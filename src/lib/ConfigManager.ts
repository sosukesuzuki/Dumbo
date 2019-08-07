import { readFileSync } from "fs";
import { join } from "path";

export type Configuration = {
  theme: {
    primary: string;
    background: string;
    body: string;
  };
};

const defaultConfig: Configuration = {
  theme: {
    primary: "#4dabf7",
    background: "#fff",
    body: "#3d3d3d"
  }
};
Object.freeze(defaultConfig);

export default class ConfigManager {
  readonly config: Configuration = this.readConfig();

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
    if (
      theme &&
      typeof theme["primary"] === "string" &&
      typeof theme["background"] === "string" &&
      typeof theme["body"] === "string"
    ) {
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
