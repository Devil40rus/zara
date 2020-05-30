import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import './styles.scss';

import Logo from '../../assets/logo.png';

const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>Выйти</span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Регистрация
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Логин
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;