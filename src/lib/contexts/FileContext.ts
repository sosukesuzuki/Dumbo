import { createContext } from 'react';

export type FileContextState = {
    filepath: string | null;
    setFilepath: (filepath: string) => void;
    resetFilepath: () => void;
};

export const FileContext = createContext<FileContextState>({
    filepath: null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilepath: null as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resetFilepath: null as any,
});
