import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import logo from '../assets/images/logo.png';

export const Header = () => {
    return (
        <header className='header_day'>
            <div className='header_logo'>
                <img src={logo} alt='logo' />
                <p>LAGH</p>
            </div>
            <div className='header_buttons'>
                <NavLink
                    exact
                    to='/'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    Inicio
                </NavLink>
                <NavLink
                    exact
                    to='/skills'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    Skills
                </NavLink>
                <NavLink
                    exact
                    to='/projects'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    Proyectos
                </NavLink>
                <NavLink
                    exact
                    to='/blog'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    Blog
                </NavLink>
                <NavLink
                    exact
                    to='/contact'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    Contacto
                </NavLink>
                <button>
                    <FaSun />
                </button>
                <button>
                    <BiWorld />
                </button>
            </div>
        </header>
    );
};
