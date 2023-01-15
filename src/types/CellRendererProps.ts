import { ICellRendererParams } from "ag-grid-community";

type CellRendererProps<T> = ICellRendererParams<T> & {
  buttonText: string;
};

export default CellRendererProps;
