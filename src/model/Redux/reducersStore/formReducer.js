import FormOTS from '../../DataHelper/ObjectToStore/FormOTS';

const form = (state = FormOTS.intialState(), action) => {
    switch (action.type) {
        case FormOTS.INPUT_FORM:
            const storeUpdate = FormOTS.toStore(action.payload, action.name);
            state = Object.assign(state, storeUpdate);
            return {...state}
        case FormOTS.CLEAR_FORM:
            return {}
        default:
            return state;
    }
}

export default { form }