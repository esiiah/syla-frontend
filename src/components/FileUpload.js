import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://syla-backend.onrender.com/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onloadstart = () => {
      setUploading(true);
      setProgress(0);
    };

    xhr.onload = () => {
      setUploading(false);
      if (xhr.status === 200) {
        alert("Upload successful: " + xhr.responseText);
      } else {
        alert("Upload failed");
      }
    };

    xhr.onerror = () => {
      setUploading(false);
      alert("Upload failed due to network error");
    };

    xhr.send(formData);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2 block w-full"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-800 text-white rounded-lg w-full"
      >
        Upload
      </button>

      {/* Progress bar */}
      {uploading && (
        <div className="mt-4 w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-blue-800 h-4 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {uploading && (
        <p className="mt-2 text-center text-sm text-gray-700">{progress}%</p>
      )}
    </div>
  );
}

export default FileUpload;
