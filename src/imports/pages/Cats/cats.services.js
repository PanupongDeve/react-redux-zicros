import axios from 'axios';
import openSocket from 'socket.io-client';
import { FETCH_CATS, FETCH_CAT } from './cats.type';
import { RootUrl } from '../../../config';

const socket = openSocket(RootUrl);

export const findAll = async () => {
    const res = await axios.get(`${RootUrl}/api/cats`);
    return res.data;
}

export const socketFindAll = async (dispatch) => {
    await socket.emit('/api/cats', { command: 'fetch_cats' });
    await socket.on('/api/cats', (data) => {
        dispatch({
            type: FETCH_CATS,
            payload: data
        });
    })
}

export const socketById = async (id, dispatch) => {
    await socket.emit('/api/cats', { command: 'fetch_cat', catId: id });
    await socket.on(`/api/cats/${id}`, (data) => {
        dispatch({
            type: FETCH_CAT,
            payload: data
        });
    })
}