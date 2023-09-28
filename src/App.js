import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Workshop from './components/Workshop';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/home" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
