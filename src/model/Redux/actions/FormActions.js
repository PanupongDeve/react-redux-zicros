import FormOTS from '../../DataHelper/ObjectToStore/FormOTS';


export const inputForm = (name, value) => async (dispatch) => {
    FormOTS.toDispatch(FormOTS.INPUT_FORM, value, name)(dispatch);
}

export const handleClearForm = () => async dispatch => {
    dispatch({
        type: FormOTS.CLEAR_FORM
    }) 
};