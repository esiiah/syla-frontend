import React from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>📊 Syla Data Analytics</h1>
      <p>Upload your data and generate instant visualizations.</p>
      <FileUpload />
      <ChartView />
    </div>
  );
}

export default App;
