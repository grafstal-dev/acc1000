import React from 'react';

export function Card({ children, style, interactive }) {
  return (
    <div className={`card ${interactive ? 'interactive' : ''}`} style={style}>
      {children}
    </div>
  );
}
