import { FORM , CLEAR_FORM } from '@imports/redux/types/formTypes';

export const handleChangeForm = (name, data) => async dispatch => {
    dispatch({
        type: FORM,
        payload: data,
        name
    })    
};

export const handleClearForm = () => async dispatch => {
    dispatch({
        type: CLEAR_FORM
    }) 
};