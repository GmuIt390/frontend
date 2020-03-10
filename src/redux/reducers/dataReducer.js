import { SET_POSTS,LOADING_DATA,LIKE_POST,UNLIKE_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false
}

export default function(state = initialState,action) {
    switch(action.type) {
        //load posts
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        //set post w/ payload
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        //find and match post with payload to like
        case LIKE_POST:
        case UNLIKE_POST:
            let index = state.posts.findIndex((post) => post.postId === action.payload.postId)
            state.posts[index] = action.payload;
            return {
                ...state
            }
        default:
            return state;
    }
}