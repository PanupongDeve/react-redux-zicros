import { FETCH_CATS, FETCH_CAT } from './cats.type';

const catsStore = {
    loading: true,
}

const intialState = catsStore;

export default (state = intialState, action) => {
    switch (action.type) {
        case FETCH_CAT:
            return {...state, cat: action.payload, loading: false};
        case FETCH_CATS:
            return {...state, cats: action.payload, loading: false};
        default:
            return {...state, loading: true};
    }
}