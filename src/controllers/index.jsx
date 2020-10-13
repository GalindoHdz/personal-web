export const dispatchTheme = (dispatch, value) => {
    dispatch({
        type: 'ADD_THEME',
        payload: { value },
    });
};

export const dispatchLanguage = (dispatch, value) => {
    dispatch({
        type: 'ADD_LANGUAGE',
        payload: { value },
    });
};
