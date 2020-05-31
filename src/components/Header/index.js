import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/logo.png';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {
    const { currentUser } = useSelector(mapState);

    return (
        <header className="header">
            <div className="wrap">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Zara LOGO" />
                </Link>
            </div>
            <div className="callToActions">
                {currentUser && (
                <ul>
                    <li>
                    <Link to="/dashboard">
                        Аккаунт
                    </Link>
                    </li>
                    <li>
                    <span onClick={() => auth.signOut()}>
                        Выйти
                    </span>
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