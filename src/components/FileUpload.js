import React, { useState } from "react";

function FileUpload({ onData, onColumns, onTypes, onSummary }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      setProgress(0);

      const response = await fetch("https://syla-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      setUploading(false);

      const result = await response.json();

      if (result.error) {
        alert(result.error);
        return;
      }

      onData(result.data || []);
      onColumns(result.columns || []);
      onTypes(result.types || {});
      onSummary(result.summary || {});
      alert(`Upload successful: ${result.filename} (${result.rows} rows)`);
    } catch (err) {
      setUploading(false);
      alert("Upload failed due to network error");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-2 block w-full"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-800 text-white rounded-lg w-full"
      >
        Upload
      </button>

      {uploading && (
        <>
          <div className="mt-4 w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-blue-800 h-4 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-700">{progress}%</p>
        </>
      )}
    </div>
  );
}

export default FileUpload;
