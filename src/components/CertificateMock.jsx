import React from 'react';
import { OBLIGATIONS } from '../lib/obligations';
import { Logo } from './Logo';

export function CertificateMock() {
  return (
    <div style={{ position: 'relative', padding: 18, background: 'linear-gradient(180deg,#f2f4f8, #eaeef5)', borderRadius: '12px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6)' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto', transform: 'rotate(-1deg)' }}>
        <div className="card" style={{ boxShadow: '0 10px 30px rgba(0,0,0,.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Logo />
            <strong>ACC1000 — Certificate (Low Risk)</strong>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '12px 0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, color: 'var(--text-secondary)', fontSize: 14 }}>
            <div><b>Company:</b> Example GmbH</div>
            <div><b>Project:</b> AI Helpdesk</div>
            <div><b>Date:</b> 2025-08-20</div>
            <div><b>Issuer:</b> Grafstal Tech Solutions</div>
          </div>
          <div style={{ marginTop: 10 }}>
            <b>Obligations Summary</b>
            <ul style={{ margin: '8px 0 0 18px' }}>
              {OBLIGATIONS.LOW.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: -8, left: 20, right: 20, height: 18, filter: 'blur(8px)', background: 'radial-gradient(50% 100% at 50% 0%, rgba(0,0,0,.18), rgba(0,0,0,0))' }} />
      </div>
    </div>
  );
}
