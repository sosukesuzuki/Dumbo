import { createContext } from "react";
import { Colors, themes } from "../themes";

export type State = {
  theme: Colors;
};

const ThemeContext = createContext<State>({
  theme: themes.WHITE
});

export default ThemeContext;
