import { SET_USER,SET_UNAUTHENTICATED,SET_AUTHENTICATED } from '../types';

//state of user reducer data
const initialState = {
    authenticated: false,
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
                ...action.payload
            }
        default:
            return state;
    }
}