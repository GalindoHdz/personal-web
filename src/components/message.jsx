import React from 'react';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchMessage } from '../controllers/message';

export const Message = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const typeClass = `message_${theme}`;
    const show = useSelector((state) => state.getIn(['Message', 'show']));
    const message = useSelector((state) => state.getIn(['Message', 'message']));
    const typeMessage = useSelector((state) =>
        state.getIn(['Message', 'typeMessage'])
    );
    const dispatch = useDispatch();

    const Time = () => {
        setTimeout(() => {
            dispatchMessage(dispatch);
        }, 3500);
    };

    switch (typeMessage) {
        case 'success':
            return (
                <>
                    {Time()}
                    {show ? (
                        <span className={typeClass}>
                            <div className='message_icon success'>
                                <FaCheckCircle />
                            </div>
                            <p>{message}</p>
                        </span>
                    ) : null}
                </>
            );
        case 'danger':
            return (
                <>
                    {Time()}
                    {show ? (
                        <span className={typeClass}>
                            <div className='message_icon danger'>
                                <FaTimesCircle />
                            </div>
                            <p>{message}</p>
                        </span>
                    ) : null}
                </>
            );
        case 'warning':
            return (
                <>
                    {Time()}
                    {show ? (
                        <span className={typeClass}>
                            <div className='message_icon warning'>
                                <FaExclamationTriangle />
                            </div>
                            <p>{message}</p>
                        </span>
                    ) : null}
                </>
            );
        default:
            return null;
    }
};
