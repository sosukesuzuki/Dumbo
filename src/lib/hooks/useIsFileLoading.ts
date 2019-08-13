import { useMemo, useContext } from "react";
import { useFileContent } from ".";
import { FileContext } from "../contexts";

export function useIsFileLoading(): boolean {
  const fileContent = useFileContent();
  const { filepath } = useContext(FileContext);

  const isUseIsFileLoading = useMemo(
    () => fileContent == null && filepath != null,
    [fileContent, filepath]
  );

  return isUseIsFileLoading;
}
