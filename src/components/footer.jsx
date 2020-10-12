import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagramSquare,
} from 'react-icons/fa';

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className='footer_day'>
            <div className='footer_buttons'>
                <a
                    href='http://google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaFacebook />
                </a>
                <a
                    href='http://google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaTwitter />
                </a>
                <a
                    href='http://google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaGithub />
                </a>
                <a
                    href='http://google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a
                    href='http://google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaInstagramSquare />
                </a>
            </div>
            <div className='footer_copy'>
                Creado por Luis Antonio Galindo &copy; {date}
            </div>
        </footer>
    );
};
