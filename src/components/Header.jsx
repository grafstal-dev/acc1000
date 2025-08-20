import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { handleAnchorClick } from '../lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav">
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Logo />
          <span style={{ fontWeight: 800, fontSize: '1.125rem' }}>AI Compliance Checker</span>
        </NavLink>
        <nav className="nav-links">
          <a href="#features" onClick={(e) => handleAnchorClick(e, 'features')}>How It Works</a>
          <a href="#sample" onClick={(e) => handleAnchorClick(e, 'sample')}>Sample Certificate</a>
          <a href="#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')}>Pricing</a>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <NavLink to="/pay/standard" className="btn btn-primary btn-glow">
            <span>Start Your Assessment</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
