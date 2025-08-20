import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import { useApp } from '../lib/store';

export default function ProMeeting() {
  const { prefillEmail } = useApp();

  function onSubmit(e) {
    e.preventDefault();
    alert('Submitted demo meeting request');
  }

  return (
    <section className='section'>
      <div className='container' style={{maxWidth: '700px'}}>
        <div style={{textAlign: 'center'}}>
          <h2>Request Your Pro Session</h2>
          <p>An expert will guide you through the assessment and answer your questions.</p>
        </div>
        <Card style={{ margin: '2rem 0' }}>
          <form onSubmit={onSubmit} style={{display: 'grid', gap: '1rem'}}>
            <label>Name
              <input required style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Email
              <input required type="email" defaultValue={prefillEmail || ''} style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Preferred Times (CET)
              <input placeholder='e.g., Tue 10–12, Thu 15–18' style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Project Details / Questions
              <textarea rows={4} placeholder='Tell us a bit about your AI system and any specific questions you have.' style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)', fontFamily: 'var(--font-sans)'}} />
            </label>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
              <button type="submit" className="btn btn-primary">Send Request</button>
              <NavLink to="/" className="btn btn-secondary">Cancel</NavLink>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
