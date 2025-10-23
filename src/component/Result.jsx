import React from 'react';
import './Result.css';

const Result = ({ data, onClose }) => {
  if (!data) return null;

  const imageUrl = URL.createObjectURL(data.file);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imageUrl} alt="Uploaded" className="modal-image" />
        <h2 className="modal-title">Predicted Class: {data.predicted_class}</h2>
      </div>
    </div>
  );
};

export default Result;
