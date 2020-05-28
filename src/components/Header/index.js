import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Регистрация
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;