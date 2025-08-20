import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="legal" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-alt)' }}>
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Logo />
              <strong>AI Compliance Checker</strong>
            </div>
            <p style={{ marginTop: 6, fontSize: '0.875rem' }}>ACC1000 helps you classify your AI project under the EU AI Act and understand the obligations that follow. Clear language, pragmatic guidance.</p>
            <p style={{ fontSize: '0.875rem' }}>© {new Date().getFullYear()} ACC1000. All rights reserved.</p>
          </div>
          <div>
            <h3>Imprint</h3>
            <p style={{ marginTop: 8, fontSize: '0.875rem' }}>Grafstal Tech Solutions<br />Gartenweg 5, 8310 Grafstal, Zürich, Switzerland<br />Support: <a href="mailto:support@grafstal.com">support@grafstal.com</a></p>
          </div>
          <div>
            <h3>Legal</h3>
            <p style={{ marginTop: 8, fontSize: '0.875rem' }}>ACC1000 is a self-assessment tool and does not constitute legal advice. Final responsibility for compliance remains with you. <a href="#/privacy">Privacy Policy</a> | <a href="#/terms">Terms of Service</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
