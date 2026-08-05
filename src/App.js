import './App.css';
import './reset.css';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'ko');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = language === 'ko' ? '김범 — Full-Stack Product Builder' : 'Kim Beom — Full-Stack Product Builder';
  }, [language]);

  return (
    <div className="App">
        <Header language={language} onLanguageChange={setLanguage} />
        <Main language={language} />
    </div>
  );
}

export default App;
