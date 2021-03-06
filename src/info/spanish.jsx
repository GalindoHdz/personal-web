import personal_web from '../assets/images/projects/personal_web.png';
import library_api from '../assets/images/projects/library-api.png';
import image from '../assets/images/projects/image-project.png';

export const spanish = {
    header: {
        home: 'Inicio',
        skills: 'Habilidades',
        projects: 'Proyectos',
        blog: 'Blog',
        contact: 'Contacto',
    },
    footer: {
        medium: 'https://medium.com/@galindohdz',
        twitter: 'https://twitter.com/GalindoHdzEngin',
        github: 'https://github.com/GalindoHdz',
        linkedin: 'https://www.linkedin.com/in/GalindoHdz/',
        instagram: 'https://www.instagram.com/Galindo_Hdz_Engin/',
        copy: 'Creado por Luis Antonio Galindo Hernández © ',
    },
    home: {
        presentation: 'Hola soy',
        name: 'Luis Antonio Galindo Hernández',
        profesion: 'Soy un Full Stack Developer',
        cv: 'Descargar CV',
        profile: {
            title: 'Perfil',
            text: [
                {
                    key: '1',
                    text:
                        'Tengo 24 años, y estoy en proceso de titulación por tesis para la carrera de Ingeniería en Computación, tengo 2 años de experiencia en el desarrollo de tecnologías web.',
                },
                {
                    key: '2',
                    text:
                        'Siempre estoy actualizándome, investigando y aprendiendo tecnologías nuevas para mejorar mis habilidades de desarrollo, aprendizaje, comprensión y creatividad.',
                },
                {
                    key: '3',
                    text:
                        'Actualmente formo parte de un pequeño grupo de desarrollo de software llamado CreativaMxDev donde me dedico al desarrollo de Arquitecturas de Software y desarrollo de Back-End.',
                },
            ],
        },
        experience: {
            title: 'Educación y Experiencia',
            card: [
                {
                    key: '1',
                    title: 'UNAM, FI',
                    time: '2015 - 2019',
                    text:
                        'Estudié la carrera de Ingeniería en Computación y tomé la especilidad en Base de Datos.',
                },
                {
                    key: '2',
                    title: 'UNICA, FI',
                    time: '2018 - 2020',
                    text:
                        'Fui becario en la Unidad de Servicios de Cómputo Académico (UNICA) en el Departamento de Invetigación y Desarrollo (DID), en donde desarrollé diferentes proyectos e imparti cursos enfocados al desarrollo de aplicaciones.',
                },
                {
                    key: '3',
                    title: 'SAC+E, FI',
                    time: '2019 - 2020',
                    text:
                        'Actualmente estoy desarrollando una tesis sobre la creacion e implementación de un Sistema de Administración del Conocimiento para la FI.',
                },
            ],
        },
    },
    skills: {
        lenguage: 'Lenguajes de programacion',
        stack: 'Stack de desarrollo',
        dataBase: 'Bases de datos',
    },
    projects: {
        title: 'Proyectos',
        show: 'Ver',
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
        read: 'Leer',
    },
    contact: {
        title: 'Contáctame',
        name: 'nombre',
        email: 'correo',
        message: 'mensaje',
        button: 'Enviar',
    },
    message: {
        name: 'Ingrese un nombre',
        email: 'Ingrese un email valido',
        message: 'Ingrese un mensaje',
        send: 'Mensaje enviado',
        error: 'Lo siento, no se puede mendar tu mensaje',
    },
};
