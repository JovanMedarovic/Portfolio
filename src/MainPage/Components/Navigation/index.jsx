import React from 'react';
import './style.scss';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="logo">
                <p>Djordje.</p>
            </div>
            <nav>
                <ul>
                    <li className="nav-item">
                        <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Contanct</a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
