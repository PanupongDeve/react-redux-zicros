import BaseOTS from './BaseOTS';


class FormOTS extends BaseOTS {
    constructor() {
        super();
        this.INPUT_FORM = "input_form";
        this.CLEAR_FORM = "clear_form";
    }

    intialState() {
        return {}
    }

    toStore(payload, name) {
        const store = {};
        store[name] = payload;
        return store;
    }

    toDispatch(type, payload, name) {
        return (dispatch) => {
            dispatch({
                type,
                payload,
                name
            });
        }  
    }

    
}

export default new FormOTS();