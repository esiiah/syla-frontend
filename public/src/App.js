import React from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>📊 Data Analytics & Visualization</h1>
      <FileUpload />
      <ChartView />
    </div>
  );
}

export default App;
