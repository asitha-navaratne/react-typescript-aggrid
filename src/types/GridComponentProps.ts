import { Ref } from "react";

import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

type GridComponentProps<T> = {
  rowData: T[];
  colDefs: ColDef<T>[];
  gridRef: Ref<AgGridReact<T>>;
};

export default GridComponentProps;
