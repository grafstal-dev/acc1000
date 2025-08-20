import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';

export default function Enterprise() {
  function onSubmit(e) {
    e.preventDefault();
    alert('Submitted enterprise inquiry (demo)');
  }

  return (
    <section className='section'>
      <div className='container' style={{maxWidth: '700px'}}>
        <div style={{textAlign: 'center'}}>
          <h2>Contact Sales For Enterprise Solutions</h2>
          <p>Let's discuss a custom plan for your portfolio of AI projects.</p>
        </div>
        <Card style={{ margin: '2rem 0' }}>
          <form onSubmit={onSubmit} style={{display: 'grid', gap: '1rem'}}>
            <label>Company Name
              <input required style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Work Email
              <input required type="email" style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Number of AI Projects
              <input type="number" min={1} defaultValue={5} style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} />
            </label>
            <label>Your Goals & Timeline
              <textarea rows={4} placeholder='Please describe your needs, key goals, and desired timelines.' style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)', fontFamily: 'var(--font-sans)'}} />
            </label>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
              <button type="submit" className="btn btn-primary">Submit Inquiry</button>
              <NavLink to="/" className="btn btn-secondary">Cancel</NavLink>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
