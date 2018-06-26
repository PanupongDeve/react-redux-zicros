import { FORM, CLEAR_FORM } from '@imports/redux/types/formTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FORM:
            return {...state, [action.name]:action.payload};
        case CLEAR_FORM:
            return {};
        default:
            return state;
    }
}
