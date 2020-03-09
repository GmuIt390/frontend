import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED,LOADING_USER, LOADING_UI } from '../types';

//state of user reducer data
const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    likes: [],
    notifications: []
};

//switch case user login state
export default function(state = initialState, action) {
    switch(action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}