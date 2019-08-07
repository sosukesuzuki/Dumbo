import { createContext } from "react";
import { Configuration } from "../ConfigManager";

export type State = {
  config: Configuration;
};

const ConfigContext = createContext<State>({
  config: null as any
});

export default ConfigContext;
