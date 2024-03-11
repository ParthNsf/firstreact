import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/Product'>Products</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>


        </div>
    );
}

export default Header;