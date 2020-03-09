import { SET_USER,SET_ERRORS,LOADING_UI,CLEAR_ERRORS } from '../types';
import axios from 'axios';

//login function
export const loginUser = (userData,history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    //process login
    axios.post('/login',userData)
    .then((result) => {
        console.log(result.data);
        //store bearer token locally and get user data
        const FBIdToken = `Bearer ${result.data.token}`;
        localStorage.setItem('FBIdToken', `Bearer ${result.data.token}`);
        axios.defaults.headers.common['Authorization'] = FBIdToken;
        dispatch(getUserData());
        //clear error from form
        dispatch({ type: CLEAR_ERRORS});
        //actual redirection
        history.push('/');
    })
    .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    });
}

//get user data function when logged in
export const getUserData = () => (dispatch) => {
    axios.get('/user')
    .then((result) => {
        dispatch({
            type: SET_USER,
            payload: result.data
        })
    })
    .catch((err) => console.log(err));
}