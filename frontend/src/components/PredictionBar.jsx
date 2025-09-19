// src/components/PredictionBar.jsx
import React from "react";
import "../styles/Admin.css";

export default function PredictionBar({ risk }) {
  const getColor = () => {
    if (risk < 30) return "green";
    if (risk < 70) return "orange";
    return "red";
  };

  return (
    <div className="prediction-bar">
      <div
        className="bar-fill"
        style={{ width: `${risk}%`, backgroundColor: getColor() }}
      >
        {risk}%
      </div>
    </div>
  );
}

