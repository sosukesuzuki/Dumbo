export type Colors = {
  primary: string;
  background: string;
  body: string;
};

export type Themes = {
  WHITE: Colors;
  BLACK: Colors;
};

export const themes: Themes = {
  WHITE: {
    primary: "#4dabf7",
    background: "#fff",
    body: "#3d3d3d"
  },
  BLACK: {
    primary: "#4dabf7",
    background: "#2b2b2b",
    body: "#f8f8f2"
  }
};
