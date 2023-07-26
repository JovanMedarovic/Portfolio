import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {urls} from "../../constants";

const Navigation = () => {
    // const allTextNavigation = ['Home', 'Projects', 'Contact'];
    const navItems = [
        {linkText:'Home',path:urls.root},
        {linkText:'About',path:urls.about}
    ];
    return (
        <div className="navigation-container">
            <div className="logo">
                <p>Djordje.</p>
            </div>
            <nav>
                <ul>
                    {
                        navItems.map((item) => {
                            return (
                               <Link className='nav-link' to={item.path}>
                                    {item.linkText}
                               </Link>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
