import { useMemo } from "react";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import GridComponentProps from "../types/GridComponentProps";

const GridComponent = <T extends {}>({
  rowData,
  colDefs,
  gridRef,
}: GridComponentProps<T>) => {
  const defaultColDef: ColDef<T> = useMemo(
    () => ({
      sortable: true,
      filter: true,
      filterParams: {
        // debounceMs: 0,
        buttons: ["apply", "clear", "cancel", "reset"],
      },
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact<T>
        ref={gridRef}
        popupParent={document.body}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default GridComponent;
