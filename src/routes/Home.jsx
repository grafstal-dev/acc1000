import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import { CertificateMock } from '../components/CertificateMock';
import { ComplianceDial } from '../components/ComplianceDial';
import { HeroAnimation } from '../components/HeroAnimation';
import { handleAnchorClick } from '../lib/utils';

function Hero() {
  return (
    <section id="hero" className="section" style={{backgroundImage: 'radial-gradient(circle at top left, #F1EDFC, transparent 40%), radial-gradient(circle at bottom right, #fbcfe8, transparent 50%)'}}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ maxWidth: '20ch', margin: '0 auto' }}>Navigate the EU AI Act With Confidence</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '65ch', margin: '1.5rem auto 0' }}>
          Stop guessing, start complying. ACC1000 is your fast-track to understanding the new EU AI regulations. Get a clear risk assessment, a detailed obligations checklist, or a shareable certificate in minutes—not weeks.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
          <NavLink to="/pay/standard" className="btn btn-primary btn-glow">
            <span>Start Assessment for €20</span>
          </NavLink>
          <a href="#sample" onClick={(e) => handleAnchorClick(e, 'sample')} className="btn btn-secondary">See Sample Certificate</a>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-tight" style={{backgroundColor: 'var(--bg-alt)'}}>
      <div className="container">
        <h2>From Complexity To Clarity In 3 Simple Steps</h2>
        <p>Our guided process removes the ambiguity of the EU AI Act.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem', textAlign: 'center' }}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '3rem', height: '3rem', color: 'var(--brand-primary)'}}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
            <h3 style={{marginTop: '1rem'}}>1. Answer Guided Questions</h3>
            <p>Our intelligent questionnaire adapts to your project, asking only what's relevant in plain, simple language.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '3rem', height: '3rem', color: 'var(--brand-primary)'}}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 style={{marginTop: '1rem'}}>2. Get Instant Classification</h3>
            <p>Our rules engine, built on the final EU AI Act text, instantly classifies your system's risk level: Low, Medium, or High.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '3rem', height: '3rem', color: 'var(--brand-primary)'}}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            <h3 style={{marginTop: '1rem'}}>3. Receive Your Action Plan</h3>
            <p>Download a formal certificate for low-risk systems or a detailed checklist of obligations for medium/high-risk ones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SampleCertificate() {
  return (
    <section id="sample" className="section-tight" style={{backgroundColor: 'var(--bg-alt)'}}>
      <div className="container">
        <h2>Know Exactly What You're Getting</h2>
        <p>Our outputs are designed for clarity and action, whether you're sharing with stakeholders or your development team.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginTop: '4rem' }}>
          <div>
            <h3 style={{marginBottom: '1rem'}}>For Low-Risk Systems: A Formal Certificate</h3>
            <p>Demonstrate due diligence to investors, partners, and customers with a professional, shareable PDF certificate confirming your AI system's low-risk classification under the EU AI Act.</p>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Clear risk category with determinants</li>
              <li>Summary of minimal transparency obligations</li>
              <li>Official record with your project details</li>
            </ul>
            <button className="btn btn-secondary" style={{marginTop: '1.5rem'}} onClick={() => window.print()}>Download Sample (Print)</button>
          </div>
          <div><CertificateMock/></div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-tight" style={{backgroundImage: 'radial-gradient(circle at top left, #F1EDFC, transparent 40%), radial-gradient(circle at bottom right, #fbcfe8, transparent 50%)'}}>
      <div className="container">
        <h2>Simple, Transparent Pricing</h2>
        <p>One-time payments for exactly what you need. No subscriptions, no hidden fees.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem', alignItems: 'stretch' }}>
          <Card interactive style={{display: 'flex', flexDirection: 'column'}}>
            <h3>ACC1000 Standard</h3>
            <div style={{margin: '1rem 0', fontSize: '3rem', fontWeight: 800}}>€20<span style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)'}}>/assessment</span></div>
            <p>The complete self-assessment for one project.</p>
            <ul style={{marginTop: '1.5rem', flexGrow: 1}}>
              <li>Full access to AI Compliance Checker</li>
              <li>Compliance Certificate <b>or</b> detailed task list</li>
              <li>Includes optional free 15-min consultation call</li>
            </ul>
            <NavLink to="/pay/standard" className="btn btn-secondary" style={{marginTop: '2rem', width: '100%'}}>Get Started</NavLink>
          </Card>
          <Card interactive style={{border: '2px solid var(--brand-primary)', transform: 'scale(1.05)', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3>ACC1000 Pro</h3>
              <span style={{background: 'var(--brand-primary)', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '99px', fontWeight: 500}}>Most Popular</span>
            </div>
            <div style={{margin: '1rem 0', fontSize: '3rem', fontWeight: 800}}>€249<span style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)'}}>/project</span></div>
            <p>A guided assessment with an AI compliance expert.</p>
            <ul style={{marginTop: '1.5rem', flexGrow: 1}}>
              <li>Expert-led questionnaire walk-through</li>
              <li>Certificate with custom comments & guidance</li>
              <li>Includes a full 1-hour AI consulting call</li>
            </ul>
            <NavLink to="/pay/pro" className="btn btn-primary btn-glow" style={{marginTop: '2rem', width: '100%'}}><span>Choose Pro</span></NavLink>
          </Card>
          <Card interactive style={{display: 'flex', flexDirection: 'column'}}>
            <h3>ACC1000 Business</h3>
            <div style={{margin: '1rem 0', fontSize: '3rem', fontWeight: 800}}>Custom</div>
            <p>For teams managing a portfolio of AI projects.</p>
            <ul style={{marginTop: '1.5rem', flexGrow: 1}}>
              <li>Personalized support for multiple projects</li>
              <li>Business-wide certificate coverage</li>
              <li>Includes documentation bundles & team training</li>
            </ul>
            <NavLink to="/enterprise" className="btn btn-secondary" style={{marginTop: '2rem', width: '100%'}}>Contact Sales</NavLink>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ComplianceDial />
      <SampleCertificate />
      <Pricing />
    </>
  );
}
