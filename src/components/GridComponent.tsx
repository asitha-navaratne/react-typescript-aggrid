import { useMemo, useRef } from "react";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine";

import GridComponentProps from "../types/GridComponentProps";

const GridComponent = <T extends {}>({
  rowData,
  colDefs,
}: GridComponentProps<T>) => {
  const gridRef = useRef<AgGridReact<T>>(null);

  const defaultColDefs: ColDef<T> = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact<T>
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDefs}
        animateRows={true}
      />
    </div>
  );
};

export default GridComponent;
