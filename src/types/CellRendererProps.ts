import { ICellRendererParams } from "ag-grid-community";

type CellRendererProps<T> = ICellRendererParams<T> & {
  buttonText?: string;
  openModal: (field: string | undefined, athlete: T | undefined) => void;
};

export default CellRendererProps;
