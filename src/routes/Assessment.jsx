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
                {(q.type==='text' || q.type==='email') && (
                  <div className="form-group">
                    <input style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)'}} type={q.type} value={answers[q.id]==="I don't know"? '': (answers[q.id]||'')} placeholder="Type here" onChange={(e)=> setVal({[q.id]: e.currentTarget.value})}/>
                    <label style={{marginTop: '0.5rem', padding: '0.5rem', border: 'none', cursor: 'pointer'}}><input type='checkbox' checked={answers[q.id]==="I don't know"} onChange={(e)=> setVal({[q.id]: e.currentTarget.checked? "I don't know": ''})}/><span>I don't know</span></label>
                  </div>
                )}
                {q.type==='textarea' && (
                  <div className="form-group">
                    <textarea style={{width:'100%', padding: '0.75rem', border:'1px solid var(--border-color)', borderRadius:'var(--radius-md)', fontFamily: 'var(--font-sans)'}} rows={4} value={answers[q.id]==="I don't know"? '': (answers[q.id]||'')} placeholder="Type here" onChange={(e)=> setVal({[q.id]: e.currentTarget.value})}/>
                    <label style={{marginTop: '0.5rem', padding: '0.5rem', border: 'none', cursor: 'pointer'}}><input type='checkbox' checked={answers[q.id]==="I don't know"} onChange={(e)=> setVal({[q.id]: e.currentTarget.checked? "I don't know": ''})}/><span>I don't know</span></label>
                  </div>
                )}
                {q.type==='single' && (
                  <div className="form-group">
                    {[...(q.options||[]), "I don't know"].map(opt=> (
                      <label key={opt} className={answers[q.id]===opt ? 'selected' : ''}>
                        <input type='radio' name={q.id} checked={answers[q.id]===opt} onChange={()=> setVal({[q.id]: opt})}/>
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                )}
                {q.type==='multiselect' && (
                  <div className="form-group">
                    {[...(q.options||[]), "I don't know"].map(opt=>{
                      const arr = Array.isArray(answers[q.id])? answers[q.id]: [];
                      const isExclusive = EXCLUSIVE.includes(opt);
                      const anySub = arr.some(v=> !EXCLUSIVE.includes(v));
                      const disabled = (isExclusive && anySub) || (!isExclusive && arr.some(v=> EXCLUSIVE.includes(v)));
                      return (
                        <label key={opt} className={`${arr.includes(opt) ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}>
                          <input type='checkbox' checked={arr.includes(opt)} disabled={disabled} onChange={(e)=>{
                            if (e.currentTarget.checked){
                              let next=[...arr,opt];
                              if(isExclusive) next=[opt];
                              else next=next.filter(v=>!EXCLUSIVE.includes(v));
                              setVal({[q.id]: next});
                            } else {
                              setVal({[q.id]: arr.filter(v=> v!==opt)});
                            }
                          }}/>
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
              <div style={{ marginTop: '1rem', color: 'var(--danger)', minHeight: '1.5rem', fontSize: '0.875rem' }}>
                {q.id === 'prohibited_practices' && (answers.prohibited_practices || []).filter(x => !['None of the above', "I don't know"].includes(x)).length > 0 && (<>High Risk Answer: Prohibited (Art.5) — you cannot be compliant while this remains in scope.</>)}
                {q.id === 'annex3_domains' && Array.isArray(answers.annex3_domains) && answers.annex3_domains.some(x => !['None apply', "I don't know"].includes(x)) && (<>High Risk Answer: Annex III selected → obligations apply.</>)}
                {q.id === 'annex1_sectoral' && Array.isArray(answers.annex1_sectoral) && answers.annex1_sectoral.some(x => !['None', "I don't know"].includes(x)) && (<>High Risk Answer: Annex I safety-component → obligations apply.</>)}
                {q.id === 'biometric_public_rt' && answers.biometric_public_rt === 'Yes' && (<>High Risk Answer: Real-time public biometric ID is strictly limited.</>)}
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
