//npm install -g create-react-app
//create-react-app prod-exercise
//npm install --save react-router-dom
//npm install --save @material-ui/core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//components
import Navbar from './components/navbar';

//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme( {
    palette: {
        primary: {
            light: '#ce93d8',
            main: '#ba68c8',
            dark: '#9c27b0',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffcdd2',
            main: '#ef9a9a',
            dark: '#e57373',
            contrastText: '#fff'
        }
    },
    typography: {
        useNextVarients: true
    }
});

class App extends Component {
    render() {
        return (
            //uses palette to apply to page
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Navbar/>
                        {/*nav bar has its own container and each route is a page path*/}
                        <div className="container">
                            <Switch>
                                <Route exact path = "/" component = { home }/>
                                <Route exact path = "/login" component = { login }/>
                                <Route exact path = "/signup" component = { signup }/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
