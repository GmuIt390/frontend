import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//material UI navigation
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class navbar extends Component {
    render() {
        return (
            //Each button is a navbar menu item
            <div>
                <AppBar>
                    <Toolbar className="nav-container">
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/signup">
                            Signup
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default navbar;