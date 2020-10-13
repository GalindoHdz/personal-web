import { createStore } from 'redux';
import Reducer from './reducer';
import { Map } from 'immutable';
import { saveState, loadState } from './storage';

export const Store = createStore(
    Reducer,
    Map(loadState()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(() => {
    saveState(Store.getState());
});
