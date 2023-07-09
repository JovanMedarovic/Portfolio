import React from 'react';
import './style.scss';
import Link from './subcomponents/Link';

const Navigation = () => {
    const allTextNavigation = ['Home', 'Projects', 'Contact'];
    return (
        <div className="navigation-container">
            <div className="logo">
                <p>Djordje.</p>
            </div>
            <nav>
                <ul>
                    {
                        allTextNavigation.map((el) => {
                            return (
                                <Link linkText={el} />
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
