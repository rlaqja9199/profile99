import React, { useEffect, useState } from 'react';

const navItems = [
  ['work', 'WORK'],
  ['about', 'ABOUT'],
  ['capabilities', 'CAPABILITIES'],
  ['contact', 'CONTACT'],
];

export default function Header({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Kim Beom portfolio home">KIM BEOM</a>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Main navigation">
        {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <div className="language-switch" aria-label="Choose language">
          <button type="button" aria-pressed={language === 'ko'} onClick={() => onLanguageChange('ko')}>KO</button>
          <button type="button" aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>EN</button>
        </div>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </header>
  );
}
