import { ICellRendererParams } from "ag-grid-community";

import Athlete from "./Athlete";

type CellRendererProps = ICellRendererParams<Athlete> & {
  buttonText?: string;
  displayText?: string;
};

export default CellRendererProps;
