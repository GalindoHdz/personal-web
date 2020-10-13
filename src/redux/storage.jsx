import { fromJS } from 'immutable';

export const saveState = (state) => {
    let data = JSON.stringify(state.toJS());
    localStorage.setItem('state', data);
};

export const loadState = () => {
    const data = localStorage.getItem('state');

    if (data) {
        return fromJS(JSON.parse(data));
    }

    return undefined;
};
