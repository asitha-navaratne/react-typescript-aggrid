import { useState, useEffect } from "react";
import "./App.css";

import { ColDef } from "ag-grid-community";

import Athlete from "./types/Athlete";
import GridComponent from "./components/GridComponent";

const url = "https://www.ag-grid.com/example-assets/olympic-winners.json";

function App() {
  const [rowData, setRowData] = useState<Athlete[]>([]);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => setRowData(result));
  }, []);

  const colDefs: ColDef<Athlete>[] = [
    {
      field: "athlete",
    },
    { field: "age" },
    { field: "country" },
    { field: "year" },
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
