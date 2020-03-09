import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//util/reducer redux
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

//initialize
const initialState = {};
const middleware = [thunk];
console.log(middleware);

//combine reducer files
const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});

//create store: requires redux devtools!!
const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;