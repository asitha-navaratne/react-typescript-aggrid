import CellRendererProps from "../types/CellRendererProps";

const CellRenderer = <T extends {}>(params: CellRendererProps<T>) => {
  if (params.colDef?.field === "age") {
    return (
      <div>
        {params.value ? params.value : params.buttonText}{" "}
        <button
          onClick={() => params.openModal(params.colDef?.field, params.data)}
        >
          {params.buttonText}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => params.openModal(params.colDef?.field, params.data)}
      >
        {params.value ? params.value : params.buttonText}
      </button>
    </div>
  );
};

export default CellRenderer;
