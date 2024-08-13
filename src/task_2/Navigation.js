import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <NavLink
                to="/gallery"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Gallery</button>
            </NavLink>
            <NavLink to="/famous-painting"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Famous</button>
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Biography</button>
            </NavLink>
        </nav>
    );
}
