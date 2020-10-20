// import nodemailer from 'nodemailer';
// import { env } from '../env';

export const validDataEmail = (data, message) => {
    try {
        const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!data.name) {
            return {
                show: true,
                message: message.name,
                typeMessage: 'warning',
            };
        }

        if (!regExp.test(data.email)) {
            return {
                show: true,
                message: message.email,
                typeMessage: 'warning',
            };
        }

        if (!data.message) {
            return {
                show: true,
                message: message.message,
                typeMessage: 'warning',
            };
        }

        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: `${env.EMAIL_ACCOUNT}`,
        //         pass: `${env.EMAIL_PASSWORD}`,
        //     },
        // });

        // await transporter.sendMail({
        //     from: `${env.EMAIL_ACCOUNT}`,
        //     to: `${env.EMAIL_ACCOUNT}`,
        //     subject: 'Message Personal Web',
        //     text: `name: ${data.name}, email: ${data.email}, message: ${data.message}`,
        // });

        return { show: true, message: message.send, typeMessage: 'success' };
    } catch (error) {
        return { show: true, message: message.error, typeMessage: 'error' };
    }
};

export const dispatchMessage = (dispatch, value) => {
    dispatch({
        type: 'ADD_MESSAGE',
        payload: { ...value },
    });
};
