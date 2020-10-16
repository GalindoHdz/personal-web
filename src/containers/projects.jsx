import React from 'react';
import { useSelector } from 'react-redux';
import { spanish } from '../info/spanish';
import { english } from '../info/english';

export const Projects = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `project_${theme}`;
    const projects = language ? english.projects : spanish.projects;

    return (
        <div className={typeClass}>
            <p className='project_title'>{projects.title}</p>
            <div className='project_cards'>
                {projects.list.map((project) => (
                    <div className='project_card' key={project.key}>
                        <div className='project_image'>
                            <img src={project.image} alt='project' />
                        </div>
                        <p>{project.name}</p>
                        <div className='project_buttons'>
                            <a
                                href={project.URL}
                                target='_blank'
                                rel='noopener noreferrer'>
                                {projects.show}
                            </a>
                            <a
                                href={project.git}
                                target='_blank'
                                rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
