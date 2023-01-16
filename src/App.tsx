import { useState, useEffect, useRef } from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import Athlete from "./types/Athlete";

import GridComponent from "./components/GridComponent";
import CellRenderer from "./components/CellRenderer";

const url = "https://www.ag-grid.com/example-assets/olympic-winners.json";

function App() {
  const [rowData, setRowData] = useState<Athlete[]>([]);

  const gridRef = useRef<AgGridReact<Athlete>>(null);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => setRowData(result));
  }, []);

  const colDefs: ColDef<Athlete>[] = [
    {
      field: "athlete",
      cellRenderer: CellRenderer,
      cellRendererParams: {
        displayText: "N/A",
      },
    },
    {
      field: "age",
      cellRenderer: CellRenderer,
      cellRendererParams: {
        buttonText: "+",
        displayText: "N/A",
      },
    },
    { field: "country" },
    {
      field: "year",
      cellRendererSelector: (params) => {
        if (params.value === 2000) {
          return {
            component: CellRenderer,
            params: {
              displayText:
                "The 2000 Games received universal acclaim, with the organisation, volunteers, sportsmanship, and Australian public being lauded in the international media.",
            },
          };
        }
      },
    },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];

  const deselectRows = function () {
    gridRef.current?.api.deselectAll();
  };

  return (
    <div className="App">
      <button onClick={deselectRows}>Deselect Rows</button>
      <GridComponent rowData={rowData} colDefs={colDefs} gridRef={gridRef} />
    </div>
  );
}

export default App;
