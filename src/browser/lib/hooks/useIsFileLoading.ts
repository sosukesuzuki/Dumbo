import { useMemo, useContext } from "react";
import useFileContent from "./useFileContent";
import { FileContext } from "../contexts";

export default function(): boolean {
  const fileContent = useFileContent();
  const { filepath } = useContext(FileContext);

  const isUseIsFileLoading = useMemo(
    () => fileContent == null && filepath != null,
    [fileContent, filepath]
  );

  return isUseIsFileLoading;
}
