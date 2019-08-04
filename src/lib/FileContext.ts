import { createContext } from "react";

export type State = {
  filepath: string | null;
  setFilepath: (filepath: string) => void;
};

const FileContext = createContext<State>({
  filepath: null,
  setFilepath: null as any
});

export default FileContext;
