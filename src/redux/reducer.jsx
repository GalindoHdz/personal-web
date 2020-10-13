import { combineReducers } from 'redux-immutable';
import { Theme, Language } from './utils';

const rootReducer = combineReducers({
    Theme,
    Language,
});

export default rootReducer;
