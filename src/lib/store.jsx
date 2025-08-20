import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [prefillEmail, setPrefillEmail] = useState('');
  const [assessmentStarted, setAssessmentStarted] = useState(false);

  useEffect(() => {
    if (prefillEmail) {
      setAnswers(a => ({ ...a, contact_email: prefillEmail }));
    }
  }, [prefillEmail]);

  const value = {
    answers,
    setAnswers,
    prefillEmail,
    setPrefillEmail,
    assessmentStarted,
    setAssessmentStarted
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
