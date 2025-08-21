import React from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="flex items-center gap-2">
        <img
          src={`${process.env.PUBLIC_URL}/icon.png`}
          alt="Syla logo"
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold">Syla Data Analytics</h1>
      </header>

      <p className="mt-2 text-gray-600">
        Upload your data and generate instant visualizations.
      </p>

      <FileUpload />
      <ChartView />
    </div>
  );
}

export default App;
