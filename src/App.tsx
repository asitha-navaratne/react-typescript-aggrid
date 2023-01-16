import { useState, useEffect, useCallback } from "react";
import "./App.css";

import { ColDef } from "ag-grid-community";

import Athlete from "./types/Athlete";

import GridComponent from "./components/GridComponent";
import CellRenderer from "./components/CellRenderer";

const url = "https://www.ag-grid.com/example-assets/olympic-winners.json";

function App() {
  const [rowData, setRowData] = useState<Athlete[]>([]);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => setRowData(result));
  }, []);

  const openModal = useCallback(
    (field: string | undefined, athlete: Athlete | undefined) => {
      if (field === "athlete") {
        window.alert(`Total Medals: ${athlete?.total}`);
      } else if (field === "age") {
        window.alert(
          `Age: ${athlete?.age}, YOB: ${
            athlete ? athlete?.year - athlete?.age : "-"
          }`
        );
      } else if (field === "year") {
        window.alert(
          "The 2000 Games received universal acclaim, with the organisation, volunteers, sportsmanship, and Australian public being lauded in the international media."
        );
      }
    },
    []
  );

  const colDefs: ColDef<Athlete>[] = [
    {
      field: "athlete",
      cellRenderer: CellRenderer,
      cellRendererParams: {
        buttonText: "N/A",
        openModal: openModal,
      },
    },
    {
      field: "age",
      cellRenderer: CellRenderer,
      cellRendererParams: {
        buttonText: "+",
        openModal: openModal,
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
              openModal: openModal,
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

  return (
    <div className="App">
      <GridComponent rowData={rowData} colDefs={colDefs} />
    </div>
  );
}

export default App;
