import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../lib/store';

export function DynamicSubHeader() {
  const { assessmentStarted } = useApp();
  const location = useLocation();
  
  const isAssessmentPage = location.pathname === '/assess' || location.pathname === '/results';

  if (assessmentStarted && !isAssessmentPage) {
    return (
      <div className="dynamic-subheader">
        <a href="#/assess">Return to your assessment in progress...</a>
      </div>
    );
  }
  return null;
}
