import React, { useState } from 'react';
import { baseUrl } from '../api/api';

const LoadImage = ({ onResult }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${baseUrl}/predict`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onResult({ file, predicted_class: data.predicted_class });

    } catch (err) {
      console.error("Upload error:", err);
      onResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input type="file" accept="image/*" onChange={handleChange} />
      {loading && <p>Processing...</p>}
    </div>
  );
};

export default LoadImage;
