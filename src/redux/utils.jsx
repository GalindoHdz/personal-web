import { fromJS } from 'immutable';

export function Theme(state = fromJS({ value: 'light' }), action) {
    switch (action.type) {
        case 'ADD_THEME':
            return action.payload.value;
        case 'REMOVE_THEME':
            return null;
        default:
            return state;
    }
}

export function Language(state = fromJS({ value: false }), action) {
    switch (action.type) {
        case 'ADD_LANGUAGE':
            return action.payload.value;
        case 'REMOVE_LANGUAGE':
            return null;
        default:
            return state;
    }
}
