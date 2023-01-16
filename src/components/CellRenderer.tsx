import { useCallback, memo } from "react";

import CellRendererProps from "../types/CellRendererProps";

const CellRenderer = (params: CellRendererProps) => {
  const openModal = useCallback(() => {
    if (params.colDef?.field === "athlete") {
      window.alert(`Total Medals: ${params.data?.total}`);
    } else if (params.colDef?.field === "age") {
      window.alert(
        `Age: ${params.data?.total}, YOB: ${
          params.data ? params.data?.year - params.data?.age : "-"
        }`
      );
    } else if (params.colDef?.field === "year") {
      window.alert(params.displayText);
    }
  }, [params]);

  if (params.colDef?.field === "age") {
    return (
      <div>
        {params.value ? params.value : params.displayText}{" "}
        <button onClick={openModal}>{params.buttonText}</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={openModal}>
        {params.value ? params.value : params.displayText}
      </button>
    </div>
  );
};

export default memo(CellRenderer);
