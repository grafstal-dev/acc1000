import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { useApp } from '../lib/store';

export default function Payment() {
  const { plan } = useParams();
  const navigate = useNavigate();
  const { setPrefillEmail, setAssessmentStarted } = useApp();
  const price = plan === 'standard' ? 20 : 249;

  function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    setPrefillEmail(String(email || ''));
    setAssessmentStarted(true);
    if (plan === 'standard') {
      navigate('/assess');
    } else {
      navigate('/pro');
    }
  }

  return (
    <section className="section">
      <div className="container" style={{maxWidth: '700px'}}>
        <div style={{textAlign: 'center'}}>
          <h2>{plan === 'standard' ? 'ACC1000 Standard' : 'ACC1000 Pro'} Checkout</h2>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Card>
            <p>Secure payment via Stripe. Use your work email to receive your receipt and your results immediately after checkout. By continuing, you agree to our Terms and Privacy.</p>
            <form onSubmit={onSubmit}>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>Email</label>
              <input name="email" required type="email" placeholder="you@company.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }} />
              <label style={{ display: 'block', fontWeight: '500', marginTop: '1rem', marginBottom: '0.5rem' }}>Card</label>
              <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.75rem', color: 'var(--text-secondary)' }}>•••• •••• •••• ••••  MM/YY  CVC</div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <button type='submit' className="btn btn-primary">Pay €{price}</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
              </div>
              <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>Sandbox demo (no charge). Prices in EUR; taxes may apply at checkout.</p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
