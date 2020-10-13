import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchTheme, dispatchLanguage } from '../controllers';
import { NavLink } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/images/logo.png';
import spanish from '../info/spanish.json';
import english from '../info/english.json';

export const Header = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const dispacth = useDispatch();
    const typeClass = `header_${theme}`;
    const [state, setState] = useState({
        show: 'no_show',
    });

    const sideShow = () => {
        if (state.show === 'no_show') {
            return setState({
                ...state,
                show: 'show',
            });
        }

        return setState({
            ...state,
            show: 'no_show',
        });
    };

    const changeTheme = () => {
        if (theme === 'light') {
            return dispatchTheme(dispacth, { value: 'dark' });
        }

        return dispatchTheme(dispacth, { value: 'light' });
    };

    const chenageLanguage = () => {
        if (language) {
            return dispatchLanguage(dispacth, { value: false });
        }

        return dispatchLanguage(dispacth, { value: true });
    };

    return (
        <header className={typeClass}>
            <div className='header_logo'>
                <button onClick={sideShow}>
                    <FiMenu />
                </button>
                <img src={logo} alt='logo' />
            </div>
            <div className='header_buttons'>
                <NavLink
                    exact
                    to='/'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    {language ? english.header.home : spanish.header.home}
                </NavLink>
                <NavLink
                    exact
                    to='/skills'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    {language ? english.header.skills : spanish.header.skills}
                </NavLink>
                <NavLink
                    exact
                    to='/projects'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    {language
                        ? english.header.projects
                        : spanish.header.projects}
                </NavLink>
                <NavLink
                    exact
                    to='/blog'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    {language ? english.header.blog : spanish.header.blog}
                </NavLink>
                <NavLink
                    exact
                    to='/contact'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'>
                    {language ? english.header.contact : spanish.header.contact}
                </NavLink>
                <button onClick={changeTheme}>
                    <FaSun />
                </button>
                <button onClick={chenageLanguage}>
                    <BiWorld />
                </button>
            </div>
            <div className={`header_side ${state.show}`}>
                <NavLink
                    exact
                    to='/'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'
                    onClick={sideShow}>
                    {language ? english.header.home : spanish.header.home}
                </NavLink>
                <NavLink
                    exact
                    to='/skills'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'
                    onClick={sideShow}>
                    {language ? english.header.skills : spanish.header.skills}
                </NavLink>
                <NavLink
                    exact
                    to='/projects'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'
                    onClick={sideShow}>
                    {language
                        ? english.header.projects
                        : spanish.header.projects}
                </NavLink>
                <NavLink
                    exact
                    to='/blog'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'
                    onClick={sideShow}>
                    {language ? english.header.blog : spanish.header.blog}
                </NavLink>
                <NavLink
                    exact
                    to='/contact'
                    style={{ textDecoration: 'none' }}
                    activeClassName='header_button_active'
                    onClick={sideShow}>
                    {language ? english.header.contact : spanish.header.contact}
                </NavLink>
                <button onClick={changeTheme}>
                    <FaSun />
                </button>
                <button onClick={chenageLanguage}>
                    <BiWorld />
                </button>
            </div>
        </header>
    );
};
