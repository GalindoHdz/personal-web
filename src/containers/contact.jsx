import React, { useState } from 'react';
import { Message } from '../components/message';
import { validDataEmail, dispatchMessage } from '../controllers/contact';
import { useSelector, useDispatch } from 'react-redux';
import { spanish } from '../info/spanish';
import { english } from '../info/english';

export const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const dispacth = useDispatch();
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `contact_${theme}`;
    const contact = language ? english.contact : spanish.contact;
    const message = language ? english.message : spanish.message;

    const data = () => {
        const form = document.forms['contact'];

        setState({
            ...state,
            name: form['name'].value,
            email: form['email'].value,
            message: form['message'].value,
        });
    };

    const login = async (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            event.preventDefault();

            const form = document.forms['contact'];
            const valid = await validDataEmail(state, message, form);

            dispatchMessage(dispacth, { value: valid });

            return form.reset();
        }
    };

    return (
        <>
            <Message />
            <div className={typeClass}>
                <p>{contact.title}</p>
                <form id='contact'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder={contact.name}
                        onChange={data}
                        onKeyPress={login}
                    />
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder={contact.email}
                        onChange={data}
                        onKeyPress={login}
                    />
                    <textarea
                        cols='30'
                        rows='10'
                        id='message'
                        name='message'
                        placeholder={contact.message}
                        onChange={data}
                    />
                    <button onClick={login}>{contact.button}</button>
                </form>
            </div>
        </>
    );
};
