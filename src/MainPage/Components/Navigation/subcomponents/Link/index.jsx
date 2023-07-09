import React from 'react';
import './style.scss';

const Link = (props) => {
    return (
        <li className="nav-item">
            <a href="" className="nav-link">{props.linkText}</a>
        </li>
    );
}
export default Link;