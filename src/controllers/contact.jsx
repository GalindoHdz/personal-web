import emailjs from 'emailjs-com';
import { env } from '../env';

export const validDataEmail = async (data, message, form) => {
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

        const email = await emailjs.sendForm(
            env.EMAILJS_SERVICE,
            env.EMAILJS_TEMPLATE,
            form,
            env.EMAIL_JS_ID
        );

        if (email.text === 'OK') {
            return {
                show: true,
                message: message.send,
                typeMessage: 'success',
            };
        }

        return { show: true, message: message.error, typeMessage: 'error' };
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
