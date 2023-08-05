import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/dnd2logo.png';
import '../styles/navStyle.css';

const NavBar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    return (
        <div id="navbar" className="headerWrapper">
            <div style={{marginLeft:"3em"}}>
                <Link onClick={() => window.scrollTo(0, 0)} to="/spells">
                    <img alt="Logo" className="logoImage" src={Logo} style={{ width: '5em' }} />
                </Link>
            </div>
            <div className={"listAndBtnDiv"}>

            <div
                className={`menuWrap${showMobileMenu ? ' mobileMenuShow' : ''}`}
            >
                <ul className="menuList">
                    <li className="lastItem">
                        <Link className="headerLink" to="/spells">
                            Home
                        </Link>
                    </li>
                    <li className="lastItem">
                        <Link className="headerLink" to="/favorites">
                            Favorites
                        </Link>
                    </li>
                    <li className="lastItem">
                        <Link className="headerLink" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="mobileMenuButton" onClick={toggleMobileMenu}>
                ☰
            </button>
            </div>

        </div>
    );
};

export default NavBar;
