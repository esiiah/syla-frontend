import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    const formData = new FormData();
    formData.append("file", file);

    // Backend endpoint (update if needed)
    const res = await fetch("https://your-backend-url.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("File uploaded successfully!");
    } else {
      alert("Upload failed.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
