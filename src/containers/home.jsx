import React from 'react';
import { useSelector } from 'react-redux';
import me from '../assets/images/me.png';
import profile from '../assets/images/profile.png';
import spanish from '../info/spanish.json';
import english from '../info/english.json';

export const Home = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `home_${theme}`;
    const textProfile = language
        ? english.home.profile.text
        : spanish.home.profile.text;
    const cards = language
        ? english.home.experience.card
        : spanish.home.experience.card;

    return (
        <div className={typeClass}>
            <section className='home_presentation'>
                <div className='presentation_text'>
                    <div>
                        <p className='presentation'>
                            {language
                                ? english.home.presentation
                                : spanish.home.presentation}
                        </p>
                        <p className='name'>
                            {language ? english.home.name : spanish.home.name}
                        </p>
                        <p className='profession'>
                            {language
                                ? english.home.profesion
                                : spanish.home.profesion}
                        </p>
                        <button>
                            {language ? english.home.cv : spanish.home.cv}
                        </button>
                    </div>
                </div>
                <div className='presentation_image'>
                    <img src={me} alt='presentation' />
                </div>
            </section>
            <section className='home_profile'>
                <div className='profile_text'>
                    <div>
                        <p className='profile_title'>
                            {language
                                ? english.home.profile.title
                                : spanish.home.profile.title}
                        </p>
                        {textProfile.map((text) => (
                            <p key={text.key}>{text.text}</p>
                        ))}
                    </div>
                </div>
                <div className='perfil_image'>
                    <img src={profile} alt='perfil' />
                </div>
            </section>
            <section className='home_experience'>
                <div className='experience_title'>
                    {language
                        ? english.home.experience.title
                        : spanish.home.experience.title}
                </div>
                <div className='experience_data'>
                    {cards.map((card) => (
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
