import React from 'react';
import { useSelector } from 'react-redux';
import me from '../assets/images/me.png';
import profile from '../assets/images/profile.png';
import cvs from '../assets/docs/LuisGalindoCVS.pdf';
import cve from '../assets/docs/LuisGalindoCVE.pdf';
import { spanish } from '../info/spanish';
import { english } from '../info/english';

export const Home = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `home_${theme}`;
    const home = language ? english.home : spanish.home;

    return (
        <div className={typeClass}>
            <section className='home_presentation'>
                <div className='presentation_text'>
                    <div>
                        <p className='presentation'>{home.presentation}</p>
                        <p className='name'>{home.name}</p>
                        <p className='profession'>{home.profesion}</p>
                        {language ? (
                            <a href={cve} download='LuisGalindoCVE'>
                                {home.cv}
                            </a>
                        ) : (
                            <a href={cvs} download='LuisGalindoCVS'>
                                {home.cv}
                            </a>
                        )}
                    </div>
                </div>
                <div className='presentation_image'>
                    <img src={me} alt='presentation' />
                </div>
            </section>
            <section className='home_profile'>
                <div className='profile_text'>
                    <div>
                        <p className='profile_title'>{home.profile.title}</p>
                        {home.profile.text.map((text) => (
                            <p key={text.key}>{text.text}</p>
                        ))}
                    </div>
                </div>
                <div className='perfil_image'>
                    <img src={profile} alt='perfil' />
                </div>
            </section>
            <section className='home_experience'>
                <div className='experience_title'>{home.experience.title}</div>
                <div className='experience_data'>
                    {home.experience.card.map((card) => (
                        <div className='data_card' key={card.key}>
                            <p className='data_title'>{card.title}</p>
                            <p className='data_time'>{card.time}</p>
                            <p className='data_text'>{card.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
