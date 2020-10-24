import React from 'react';
import { useSelector } from 'react-redux';
import { spanish } from '../info/spanish';
import { english } from '../info/english';
import {
    FaMedium,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagramSquare,
} from 'react-icons/fa';

export const Footer = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const foot = language ? english.footer : spanish.footer;
    const typeClass = `footer_${theme}`;
    const date = new Date().getFullYear();

    return (
        <footer className={typeClass}>
            <div className='footer_buttons'>
                <a href={foot.medium} target='_blank' rel='noopener noreferrer'>
                    <FaMedium />
                </a>
                <a
                    href={foot.twitter}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaTwitter />
                </a>
                <a href={foot.github} target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
                <a
                    href={foot.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a
                    href={foot.instagram}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaInstagramSquare />
                </a>
            </div>
            <div className='footer_copy'>
                {foot.copy}
                {date}
            </div>
        </footer>
    );
};
