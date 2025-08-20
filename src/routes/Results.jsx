import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import { useApp } from '../lib/store';
import { finalize, OBLIGATIONS } from '../lib/rubric';

export default function Results() {
  const { answers } = useApp();
  const res = finalize(answers);
  const today = new Date().toISOString().slice(0, 10);
  const company = answers.company_name || '(company)';
  const project = answers.project_name || '(project)';
  const sysdesc = answers.system_description || '';
  const gaps = res.gaps || [];

  return (
    <section className='section'>
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Results</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <NavLink to='/assess' className="btn btn-secondary">Back to questionnaire</NavLink>
            <button className="btn btn-primary" onClick={() => window.print()}>Print / Save PDF</button>
          </div>
        </div>
        <Card style={{ marginTop: '2rem' }}>
          {/* Results content based on res.type */}
        </Card>
      </div>
    </section>
  );
}
