import React from 'react';
import './style.scss'
import mainLogo from '../../access/header/logo.svg'

const Header = () => {
    return (
        <header>
            <div className={'header'}>
                <a href="https://www.google.com.ua/"><img src={mainLogo} alt="Logo"/></a>
                <nav>
                    <ul className={'nav'}>
                        <li className="nav-item"><a href="https://www.google.com.ua/">Home</a></li>
                        <li className="nav-item"><a href="https://www.google.com.ua/">TV Show</a></li>
                        <li className="nav-item"><a href="https://www.google.com.ua/">Movies</a></li>
                        <li className="nav-item"><a href="https://www.google.com.ua/">Serials</a></li>
                    </ul>
                </nav>
                <ul className={'navigation'}>
                    <li className="navigation-icon">
                        <button className={'navigation-btn navigation-btn--search'}></button>
                    </li>
                    <li className="navigation-icon">
                        <button className={'navigation-btn navigation-btn--notification'}></button>
                    </li>
                    <li className="navigation-icon">
                        <button className={'navigation-btn navigation-btn--user'}></button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
