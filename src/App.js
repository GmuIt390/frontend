//npm install -g create-react-app
//create-react-app prod-exercise
//npm install --save react-router-dom
//npm install --save @material-ui/core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
//npm install --save jwt-decode
import jwtDecode from 'jwt-decode';
import axios from 'axios';

//npm install --save redux react-redux redux-thunk
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

//components
import AuthRoute from './util/AuthRoute';

//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import low from './pages/low';
import medium from './pages/medium';
import high from './pages/high';
import profile from './pages/profile';
import about from './pages/about';
import news from './pages/news';
import contact from './pages/contact';

//npm install --save node-sass
// styles
// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/paper-kit.scss";

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = "https://us-central1-prod-exercise.cloudfunctions.net/api";

//checks login status
const token = localStorage.FBIdToken;
if(token) {
    //decode bearer token
    const decodedToken = jwtDecode(token);
    //check if token expired
    if(decodedToken.exp*1000 < Date.now()) {
        window.location.href='/login';
        store.dispatch(logoutUser());
    }
    else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

class App extends Component {
    render() {
        return (
            //validates user login state
            <Provider store={store}>
                {/*uses palette to apply to page*/}
                <MuiThemeProvider theme={theme}>
                        <Router>
                            {/* <Navbar/> */}

                            {/*Use div for condense page*/}
                            {/* <div className="container"> */}

                                {/*each route is a page path*/}
                                <Switch>
                                    <Route
                                        exact path = "/"
                                        component = { home }
                                    />
                                    <AuthRoute
                                        exact path = "/login"
                                        component = { login }
                                    />
                                    <AuthRoute
                                        exact path = "/signup"
                                        component = { signup }
                                    />
                                    <Route
                                        exact path = "/profile"
                                        component = { profile }
                                    />
                                    <Route
                                        exact path = "/low"
                                        component = { low }
                                    />
                                    <Route
                                        exact path = "/medium"
                                        component = { medium }
                                    />
                                    <Route
                                        exact path = "/high"
                                        component = { high }
                                    />
                                    <Route
                                        exact path = "/news"
                                        component = { news }
                                    />
                                    <Route
                                        exact path = "/about"
                                        component = { about }
                                    />
                                    <Route
                                        exact path = "/contact"
                                        component = { contact }
                                    />
                                </Switch>
                            {/* </div> */}
                        </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
