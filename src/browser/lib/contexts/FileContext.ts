import { createContext } from "react";

export type FileContextState = {
  filepath: string | null;
  setFilepath: (filepath: string) => void;
  resetFilepath: () => void;
};

export const FileContext = createContext<FileContextState>({
  filepath: null,
  setFilepath: null as any,
  resetFilepath: null as any
});
