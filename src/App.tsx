// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SpellList from './components/SpellList';
import SpellDetails from './components/SpellDetails';
// import Favorites from './components/Favorites';

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Spell List</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<SpellList />} />
            {/*<Route path="/favorites" element={<Favorites />} />*/}
            <Route path="/spells/:index" element={<SpellDetails />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
