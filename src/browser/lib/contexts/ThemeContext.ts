import { createContext } from "react";
import { Colors, themes } from "../themes";

export type ThemeContextState = {
  theme: Colors;
};

export const ThemeContext = createContext<ThemeContextState>({
  theme: themes.WHITE
});
