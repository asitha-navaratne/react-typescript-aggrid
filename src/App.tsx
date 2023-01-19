import { useState, useEffect, useRef, useCallback } from "react";
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
  const savedFilterState = useRef<{
    [key: string]: any;
  } | null>(null);

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
      filter: "agTextColumnFilter",
    },
    {
      field: "age",
      cellRenderer: CellRenderer,
      cellRendererParams: {
        buttonText: "+",
        displayText: "N/A",
      },
      filter: "agNumberColumnFilter",
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

  const onButtonSave = useCallback(() => {
    savedFilterState.current = gridRef.current!.api.getFilterModel();
  }, []);

  const onButtonApply = useCallback(() => {
    gridRef.current!.api.setFilterModel(savedFilterState.current);
  }, []);

  return (
    <div className="App">
      <button onClick={deselectRows}>Deselect Rows</button>
      <div>
        <button onClick={onButtonSave}>Save</button>
        <button onClick={onButtonApply}>Apply</button>
      </div>
      <GridComponent rowData={rowData} colDefs={colDefs} gridRef={gridRef} />
    </div>
  );
}

export default App;
