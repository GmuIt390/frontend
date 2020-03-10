import { SET_POSTS,LOADING_DATA,LIKE_POST,UNLIKE_POST } from '../types';
import axios from 'axios';

//get all posts
export const getPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/posts')
    .then((result) => {
        dispatch({
            type: SET_POSTS,
            payload: result.data
        })
    })
    .catch((err) => {
        dispatch({
            type: SET_POSTS,
            payload: null
        })
    })
}

//like a post
export const likePost = (postId) => (dispatch) => {
    axios.get(`'/posts/${postId}/like`)
    .then((result) => {
        dispatch({
            type: LIKE_POST,
            payload: result.data
        })
    })
    .catch((err) => console.log(err));
}

//unlike a post
export const unlikePost = (postId) => (dispatch) => {
    axios.get(`'/posts/${postId}/unlike`)
    .then((result) => {
        dispatch({
            type: UNLIKE_POST,
            payload: result.data
        })
    })
    .catch((err) => console.log(err));
}