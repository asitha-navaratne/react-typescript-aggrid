import { useCallback } from "react";

import CellRendererProps from "../types/CellRendererProps";

const CellRenderer = <T extends {}>(params: CellRendererProps<T>) => {
  const openModal = useCallback(
    () => window.alert(`Cell Value: ${params.value}`),
    [params.value]
  );

  return (
    <div>
      {params.value} <button onClick={openModal}>{params.buttonText}</button>
    </div>
  );
};

export default CellRenderer;
