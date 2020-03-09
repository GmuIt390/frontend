//npm install -g create-react-app
//create-react-app prod-exercise
//npm install --save react-router-dom
//npm install --save @material-ui/core
//npm install --save jwt-decode
//npm install --save redux react-redux redux-thunk
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//components
import Navbar from './components/navbar';
import AuthRoute from './util/AuthRoute';

//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme(themeFile);

//checks login status
let authenticated;
const token = localStorage.FBIdToken;
if(token) {
    //decode bearer token
    const decodedToken = jwtDecode(token);
    //check if token expired
    if(decodedToken.exp*1000 < Date.now()) {
        window.location.href='/login';
        authenticated = false;
    }
    else {
        authenticated = true;
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
                            <Navbar/>
                            {/*nav bar has its own container and each route is a page path*/}
                            <div className="container">
                                <Switch>
                                    <Route
                                        exact path = "/"
                                        component = { home }
                                    />
                                    <AuthRoute
                                        exact path = "/login"
                                        component = { login }
                                        authenticated={authenticated}
                                    />
                                    <AuthRoute
                                        exact path = "/signup"
                                        component = { signup }
                                        authenticated={authenticated}
                                    />
                                </Switch>
                            </div>
                        </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
