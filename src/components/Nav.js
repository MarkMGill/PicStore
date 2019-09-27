import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle =  {
        color: '#fff'
    }

    return (
        <nav>
            <Link to="/">
                <img src="art-icon.jpg" className="rounded" alt="art-icon" height="50px" width="50px"></img>
            </Link>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/" style={navStyle}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;






