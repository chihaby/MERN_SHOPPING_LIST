import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING  } from './types';
// import { set } from 'mongoose';

export const getItems = () =>dispatch => {
    dispatch(setItemsLoading());
    // proxy will handle http:// ...
    axios
        .get('/api/items')
        .then(res=> 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const addItem = item => dispatch => {
axios
    // No need to include http:// the proxy in package json is set to handle that
    .post('/api/items', item)
    .then(res => 
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
};

export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`).then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
};


export const setItemsLoading = ()  => {
    return {
        type: ITEMS_LOADING
    };
};