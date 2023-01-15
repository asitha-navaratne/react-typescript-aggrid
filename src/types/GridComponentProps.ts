import { ColDef } from "ag-grid-community";

type GridComponentProps<T> = {
  rowData: T[];
  colDefs: ColDef<T>[];
};

export default GridComponentProps;
