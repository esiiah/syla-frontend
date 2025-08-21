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

    try {
      const response = await fetch("https://syla-bankend.onrender.com", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(JSON.stringify(data, null, 2));
    } catch (err) {
      alert("Upload failed: " + err.message);
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
