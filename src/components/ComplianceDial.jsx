import React, { useState, useEffect } from 'react';

export function ComplianceDial() {
  const [angle, setAngle] = useState(-80);
  const angles = [-80, 0, 80]; // Low, Medium, High

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(angles[Math.floor(Math.random() * angles.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="compliance-dial">
        <div className="dial-bg"></div>
        <div className="dial-needle" style={{ transform: `rotate(${angle}deg)` }}></div>
        <div className="dial-pivot"></div>
      </div>
      <div className="dial-labels">
        <span>Low Risk</span>
        <span>Medium</span>
        <span>High Risk</span>
      </div>
    </div>
  );
}
