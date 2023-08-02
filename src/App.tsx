// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBar from "./components/SideBar";
import SpellList from "./components/SpellList";
import SpellComponent from "./components/SpellComponent";
import SpellDetails from "./components/SpellDetails";
import MonstersList from "./components/MonstersList";

const App: React.FC = () => {
  return (
      <div style={{
        display: 'flex',
        flexDirection:"row"
      }}>
        <SideBar />
        <Content/>
      </div>

  );

};

const Home: React.FC = () => {
  return <h2>Home</h2>;
};

const Content:React.FC=()=>{
  return(
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spells" element={<SpellList />} />
            <Route path="/monsters" element={<MonstersList />} />
            <Route path="/characters" element={<SpellComponent />} />
            <Route path="/powers" element={<SpellDetails/>} />
          </Routes>
        </div>
  )
}

export default App;
