import { combineReducers } from 'redux-immutable';
import { Theme, Language, Message } from './utils';

const rootReducer = combineReducers({
    Theme,
    Language,
    Message,
});

export default rootReducer;
