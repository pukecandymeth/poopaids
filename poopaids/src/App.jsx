import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Login from './components/Login'; 
import Stats from './components/Stats'; 
import CalmingMeasures from './components/CalmingMeasures'; 
import logo from './assets/health.png';

function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="Anxiety Detector Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
        <h2 id = "heading">Anxiety Detector</h2>
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/stat">Stats</Link>
          <Link to="/calmingmeasures">Calming Measures</Link>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/stat" element={<Stats/>} />
          <Route path="/calmingmeasures" element={<CalmingMeasures/>} />

          <Route path="/" element={<h2>Greetings</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
