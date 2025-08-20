import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import Payment from './routes/Payment';
import Assessment from './routes/Assessment';
import Results from './routes/Results';
import ProMeeting from './routes/ProMeeting';
import Enterprise from './routes/Enterprise';
import Terms from './routes/Terms';
import Privacy from './routes/Privacy';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DynamicSubHeader } from './components/DynamicSubHeader';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <DynamicSubHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay/:plan" element={<Payment />} />
          <Route path="/assess" element={<Assessment />} />
          <Route path="/results" element={<Results />} />
          <Route path="/pro" element={<ProMeeting />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

// src/styles Directory
