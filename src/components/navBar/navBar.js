import React from 'react';
import "./navBar.css";
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header className="header">
            <NavLink to='/'>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            </NavLink>
            <nav>
                <ul className='nav-links'> 
                    <NavLink to='/'> <li>Inicio</li></NavLink>
                    <NavLink to='/category/Remera'><li>Remeras</li></NavLink>
                    <NavLink to='/category/Buzo'><li>Buzos</li></NavLink>
                </ul>
            </nav>
            <NavLink to='/cart'>
            <div className='cart'>
            <CartWidget/>
            </div>
            </NavLink>
        </header>
    );
};

export default NavBar;