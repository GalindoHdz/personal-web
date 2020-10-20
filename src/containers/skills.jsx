import React from 'react';
import { useSelector } from 'react-redux';
import { HorizontalBar, defaults } from 'react-chartjs-2';
import { spanish } from '../info/spanish';
import { english } from '../info/english';

export const Skills = () => {
    defaults.global.defaultFontFamily = 'Consolas';
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `skill_${theme}`;
    let widthPrograming;
    let widthStack;
    let widthDataBase;
    let options;

    const programming = {
        labels: [' JavaScript', 'Java', 'Python', 'SQL'],
        datasets: [
            {
                backgroundColor: 'rgba(39, 105, 227, 0.2)',
                borderColor: 'rgba(39, 105, 227, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(39, 105, 227, 0.4)',
                hoverBorderColor: 'rgba(39, 105, 227, 1)',
                data: [80, 80, 20, 80, 0, 100],
            },
        ],
    };

    const stack = {
        labels: [
            'HTML',
            'CSS',
            'SASS',
            'React.JS',
            'Vue.JS',
            'Docker',
            'GraphQL',
            'Node.JS',
        ],
        datasets: [
            {
                label: 'Nivel',
                backgroundColor: 'rgba(39, 105, 227, 0.2)',
                borderColor: 'rgba(39, 105, 227, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(39, 105, 227, 0.4)',
                hoverBorderColor: 'rgba(39, 105, 227, 1)',
                data: [85, 85, 60, 80, 30, 80, 70, 70, 0, 100],
            },
        ],
    };

    const dataBase = {
        labels: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB'],
        datasets: [
            {
                label: 'Nivel',
                backgroundColor: 'rgba(39, 105, 227, 0.2)',
                borderColor: 'rgba(39, 105, 227, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(39, 105, 227, 0.4)',
                hoverBorderColor: 'rgba(39, 105, 227, 1)',
                data: [60, 50, 50, 60, 0, 100],
            },
        ],
    };

    if (window.innerWidth >= 769) {
        widthPrograming = 80;
        widthStack = 140;
        widthDataBase = 80;
        defaults.global.defaultFontSize = 16;
    } else if (window.innerWidth <= 425) {
        widthPrograming = 160;
        widthStack = 270;
        widthDataBase = 160;
    } else {
        widthPrograming = 100;
        widthStack = 160;
        widthDataBase = 100;
        defaults.global.defaultFontSize = 14;
    }

    if (theme === 'light') {
        options = {
            responsive: true,
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#717171',
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: { fontColor: '#717171' },
                    },
                ],
            },
        };
    } else {
        options = {
            responsive: true,
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#bbbbbb',
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: { fontColor: '#bbbbbb' },
                    },
                ],
            },
        };
    }

    return (
        <div className={typeClass}>
            <div className='skill_chart'>
                <p>
                    {language
                        ? english.skills.lenguage
                        : spanish.skills.lenguage}
                </p>
                <div>
                    <HorizontalBar
                        data={programming}
                        height={widthPrograming}
                        options={options}
                    />
                </div>
            </div>
            <div className='skill_chart'>
                <p>{language ? english.skills.stack : spanish.skills.stack}</p>
                <div>
                    <HorizontalBar
                        data={stack}
                        height={widthStack}
                        options={options}
                    />
                </div>
            </div>
            <div className='skill_chart'>
                <p>
                    {language
                        ? english.skills.dataBase
                        : spanish.skills.dataBase}
                </p>
                <div>
                    <HorizontalBar
                        data={dataBase}
                        height={widthDataBase}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
};
