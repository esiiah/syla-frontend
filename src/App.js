import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import "./App.css";

function App() {
  const [data, setData] = useState([]);          // cleaned rows
  const [columns, setColumns] = useState([]);    // column names
  const [types, setTypes] = useState({});        // {"col": "numeric" | "categorical" | "datetime"}
  const [summary, setSummary] = useState({});    // numeric stats

  // Optional: detect PWA install prompt
  useEffect(() => {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      console.log("PWA can be installed!");
      // You can later trigger deferredPrompt.prompt() when user clicks a button
    });
  }, []);

  return (
    <>
      <div className="App">
        <header className="flex items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.png`}
            alt="Syla logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-center">Syla Data Analytics</h1>
        </header>

        <p className="mt-2 text-gray-600">
          Upload your data and generate instant visualizations.
        </p>

        <FileUpload
          onData={setData}
          onColumns={setColumns}
          onTypes={setTypes}
          onSummary={setSummary}
        />

        <ChartView data={data} columns={columns} types={types} />

        {Object.keys(summary).length > 0 && (
          <div className="max-w-3xl mx-auto mt-6 p-4 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            <pre className="text-sm overflow-auto">{JSON.stringify(summary, null, 2)}</pre>
          </div>
        )}
      </div>

    </>
  );
}

export default App;
