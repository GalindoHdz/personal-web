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

    const login = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            event.preventDefault();

            const valid = validDataEmail(state, message);

            return dispatchMessage(dispacth, { value: valid });
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
                        placeholder={contact.name}
                        onChange={data}
                        onKeyPress={login}
                    />
                    <input
                        type='text'
                        id='email'
                        placeholder={contact.email}
                        onChange={data}
                        onKeyPress={login}
                    />
                    <textarea
                        cols='30'
                        rows='10'
                        id='message'
                        placeholder={contact.message}
                        onChange={data}
                    />
                    <button onClick={login}>{contact.button}</button>
                </form>
            </div>
        </>
    );
};
