import * as cat from './cats.services';



export const fetchCats = () => async dispatch => {
    await cat.socketFindAll(dispatch);    
};

export const fetchCat = (id) => async dispatch => {
    await cat.socketById(id, dispatch);
}