import personal_web from '../assets/images/projects/personal_web.png';
import library_api from '../assets/images/projects/library-api.png';
import image from '../assets/images/projects/image-project.png';

export const english = {
    header: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        blog: 'Blog',
        contact: 'Contact',
    },
    footer: {
        medium: 'https://medium.com/@galindohdz',
        twitter: 'https://twitter.com/GalindoHdzEngin',
        github: 'https://github.com/GalindoHdz',
        linkedin: 'https://www.linkedin.com/in/GalindoHdz/',
        instagram: 'https://www.instagram.com/Galindo_Hdz_Engin/',
        copy: 'Created by Luis Antonio Galindo Hernández © ',
    },
    home: {
        presentation: "Hello I'm",
        name: 'Luis Antonio Galindo Hernández',
        profesion: "I'm a Full Stack Developer",
        cv: 'Download CV',
        profile: {
            title: 'Profile',
            text: [
                {
                    key: '1',
                    text:
                        "I'm 24 years old, and I'm in the process of degree by thesis for the career of Computer Engineering, I have 2 years of experience in the development of web technologies.",
                },
                {
                    key: '2',
                    text:
                        "I'm always updating myself, investigating and learning new technologies to improve my skills of development, learning, understanding and creativity.",
                },
                {
                    key: '3',
                    text:
                        "At present I'm part of a small group of development of software called CreativaMxDev where I devote myself to the development of Architectures of Software and the development of Back-End.",
                },
            ],
        },
        experience: {
            title: 'Education and Experience',
            card: [
                {
                    key: '1',
                    title: 'UNAM, FI',
                    time: '2015 - 2019',
                    text:
                        'I studied Engineering in Computing and took the especilidad in Database.',
                },
                {
                    key: '2',
                    title: 'UNICA, FI',
                    time: '2018 - 2020',
                    text:
                        'I was a fellow in the Academic Computing Services Unit (UNICA) in the Department of Invetigation and Development (DID), where I developed different projects and gave courses focused on the development of applications.',
                },
                {
                    key: '3',
                    title: 'SAC+E, FI',
                    time: '2019 - 2020',
                    text:
                        'At present I am developing a thesis about the creation and implementation of a System of Administration of the Knowledge for the FI.',
                },
            ],
        },
    },
    skills: {
        lenguage: 'Programming languages',
        stack: 'Development stack',
        dataBase: 'Databases',
    },
    projects: {
        title: 'Projects',
        show: 'Show',
        list: [
            {
                key: 1,
                name: 'PERSONAL-WEB',
                image: personal_web,
                URL: 'https://www.google.com.mx',
                git: 'https://github.com/',
            },
            {
                key: 2,
                name: 'LIBRARY-API',
                image: library_api,
                URL: 'https://api-toth.herokuapp.com/graphql',
                git: 'https://github.com/GalindoHdz/library-api',
            },
            {
                key: 3,
                name: 'WEB-APP-LIBRARY',
                image: image,
                URL: 'https://www.google.com.mx',
                git: 'https://github.com/',
            },
            {
                key: 4,
                name: 'APP-LIBRARY',
                image: image,
                URL: 'https://www.google.com.mx',
                git: 'https://github.com/',
            },
            {
                key: 5,
                name: 'API-SAC',
                image: image,
                URL: 'https://www.google.com.mx',
                git: 'https://github.com/',
            },
            {
                key: 6,
                name: 'WEB-APP-SAC',
                image: image,
                URL: 'https://www.google.com.mx',
                git: 'https://github.com/',
            },
        ],
    },
    blog: {
        read: 'Read',
    },
    contact: {
        title: 'Contact me',
        name: 'name',
        email: 'email',
        message: 'message',
        button: 'Send',
    },
    message: {
        name: 'Enter a name',
        email: 'Enter a valid email',
        message: 'Enter a message',
        send: 'Message sent',
        error: 'I am sorry, you cant message your message',
    },
};
