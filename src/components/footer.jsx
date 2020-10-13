import React from 'react';
import { useSelector } from 'react-redux';
import spanish from '../info/spanish.json';
import english from '../info/english.json';
import {
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagramSquare,
} from 'react-icons/fa';

export const Footer = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `footer_${theme}`;
    const date = new Date().getFullYear();

    return (
        <footer className={typeClass}>
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
                {language ? english.footer.copy : spanish.footer.copy}
                {date}
            </div>
        </footer>
    );
};
