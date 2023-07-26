import React from 'react';
import './style.scss';
import Link from './subcomponents/Link';

const Footer = () => {
    const allTextNavigation = ['Home', 'GitHub', 'Linkedin'];
    return (
        <div className="footer-container">
            <div className="logo">
                <p>Djordje Jemuovic 2023</p>
            </div>
            <nav>
                <ul>
                    {/* {
                        allTextNavigation.map((el) => {
                            return (
                                <Link linkText={el} />
                            );
                        })
                    } */}
                  
                    <li className="nav-item">
                        <a href="http://www.google.com" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="www.google.com" className="nav-link">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a href="www.google.com" className="nav-link">LinkedIn</a>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}
export default Footer;
