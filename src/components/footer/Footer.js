import React from 'react';
import './style.scss'
import mainLogo from "../../access/header/logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className='footer-item'>
                    <a href="https://www.google.com.ua/"><img src={mainLogo} alt="Logo"/></a>
                </div>

                <div className="footer-item">
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Voice over and Subtitle </a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Media Center </a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Privacy </a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Contact us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-item">
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Voice Description</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Investor Relations</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Legal Provisions</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-item">
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Help Center</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Job Opportunities</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Cookies Preferences</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-item">
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Gift Cards</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Terms of Use</a>
                        </li>
                        <li className="footer-link">
                            <a href="#" className={'footer-link--item'}>Corporate Informations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
