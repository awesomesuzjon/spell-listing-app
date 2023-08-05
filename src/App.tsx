import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpellList from './components/SpellList';
import './components/styles/appStyles.css';
import SpellInfo from './components/SpellInfo';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/navComponent/NavBar';
import Favourites from './components/Favourites';
import './App.css';
import AboutUs from './components/AboutUs';


const Content: React.FC = () => (
        <div>
            <Provider store={store}>
            <Routes>
                <Route path="/" element={<SpellList />} />
                <Route path="/spells" element={<SpellList />} />
                <Route path="/favorites" element={<Favourites />} />
                <Route path="/about" element={<AboutUs />} />
                {/* Using :url to define the dynamic part of the URL */}
                <Route path="/spells/:url" element={<SpellInfo />} />
            </Routes>
            </Provider>
        </div>

);

const App: React.FC = () => (<>
        <main className={'mainContainer'} >
            <NavBar/>
            <Content />
        </main>
    </>
);


export default App;
