export type Colors = {
  primary: string;
  border: string;
  gray: string;
  background: string;
  body: string;
};

export type Themes = {
  DEFAULT: Colors;
  DARK: Colors;
};

export const themes: Themes = {
  DEFAULT: {
    primary: "#4dabf7",
    border: "#ced4da",
    background: "#fff",
    gray: "#fafafa",
    body: "#3d3d3d"
  },
  DARK: {
    primary: "#bd93f9",
    border: "#f8f8f2",
    background: "#44475a",
    gray: "#44475a",
    body: "#f8f8f2"
  }
};
