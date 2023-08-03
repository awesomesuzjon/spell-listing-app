import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBar from "./components/SideBar";
import SpellList from "./components/SpellList";
import SpellDetails from "./components/SpellDetails";
import MonstersList from "./components/MonstersList";
import '../src/components/styles/appStyles.css'
import SpellInfo from "./components/SpellInfo";
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "row" }}>
            <SideBar />
            <Content />
        </div>
    );
};

const Home: React.FC = () => {
    return <h2>Home</h2>;
};

const Content: React.FC = () => {
    return (
        <div>
            <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spells" element={<SpellList />} />
                <Route path="/monsters" element={<MonstersList />} />
                {/* Use :url to define the dynamic part of the URL */}
                <Route path="/spells/:url" element={<SpellInfo />} />
                <Route path="/powers" element={<SpellDetails />} />
            </Routes>
            </Provider>
        </div>

    );
}

export default App;
