import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className="app" id="app">
        <section className={theme === 'light' ? 'light' : 'dark'}>
          <Navigation />
          <Home />
          <About />
          <Skill />
          <Workshop />
          <Contact />
          <Footer />
        </section>
      </main>
    </ThemeContext.Provider>
  );
}
export default App;
