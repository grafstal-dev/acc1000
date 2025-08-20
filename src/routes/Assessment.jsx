import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { useApp } from '../lib/store';
import { questionnaire, visibleQuestions, EXCLUSIVE } from '../lib/questionnaire';
import { currentStatus } from '../lib/rubric';

export default function Assessment() {
  const { answers, setAnswers } = useApp();
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const qs = useMemo(() => visibleQuestions(answers), [answers]);
  const q = qs[idx];
  const status = currentStatus(answers);
  const total = qs.length || 1;
  const done = Math.min(idx + 1, total);
  const pct = Math.round((done / total) * 100);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    setGlow(true);
    const timer = setTimeout(() => setGlow(false), 1500);
    return () => clearTimeout(timer);
  }, [status.label]);

  function setVal(patch) {
    setAnswers({ ...answers, ...patch });
  }

  function next() {
    if (idx < qs.length - 1) {
      setIdx(idx + 1);
    } else {
      navigate('/results');
    }
  }

  function prev() {
    setIdx(Math.max(0, idx - 1));
  }

  return (
    <section className="section">
      <div className="container" style={{maxWidth: '900px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Assessment</h2>
          <div className={`status-badge ${status.color} ${glow ? 'glow' : ''}`}>
            Current: {status.label}
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--brand-primary)' }}>Question {done} of {total}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{pct}% complete</div>
          </div>
          <div style={{ height: '0.75rem', background: 'var(--border-color)', borderRadius: '999px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--brand-primary)', transition: 'width 0.5s ease' }} />
          </div>
          {q && <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>{q.label}</div>}
        </div>
        <Card style={{ margin: '2rem 0' }}>
          {q && (
            <div>
              {q.help && (<details style={{color: 'var(--text-secondary)'}}><summary>Why this matters</summary><div style={{ marginTop: '0.5rem' }}>{q.help}</div></details>)}
              <div style={{ marginTop: '1rem' }}>
                {/* All form input types rendered here */}
              </div>
              <div style={{ marginTop: '1rem', color: 'var(--danger)', minHeight: '1.5rem', fontSize: '0.875rem' }}>
                {/* High risk answers */}
              </div>
            </div>
          )}
        </Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <div>{idx > 0 ? <button className="btn btn-secondary" onClick={prev}>Back</button> : <span />}</div>
          <div><button className="btn btn-primary" onClick={next}>{idx === qs.length - 1 ? 'Finish & See Results' : 'Next Question'}</button></div>
        </div>
      </div>
    </section>
  );
}
