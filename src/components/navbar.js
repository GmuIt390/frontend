import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/myButton';

//redux
import { logoutUser } from '../redux/actions/userActions';

//material UI navigation
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//npm install --save @material-ui/icons
//icons
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';

// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
  } from "reactstrap";

class navbar extends Component {
    //logout method
    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const { authenticated } = this.props
        return (
                <Toolbar className="nav-container">
                    <Fragment>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/">
                            Intensity
                        </Button>
                        <Button color="inherit" component={Link} to="/">
                            About
                        </Button>
                        {authenticated ? (
                                <>
                                    <MyButton tip="Post">
                                        <AddIcon/>
                                    </MyButton>
                                    <MyButton tip="Notifications">
                                        <Notifications/>
                                    </MyButton>
                                    <Button
                                        color="inherit" 
                                        component={Link} 
                                        to="/profile"
                                    >
                                        Profile
                                    </Button>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        onClick={this.handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </>
                            )
                            : (
                                <>  
                                    <Button color="inherit" component={Link} to="/login">
                                        Login
                                    </Button>
                                    <Button color="inherit" component={Link} to="/signup">
                                        Signup
                                    </Button>
                                </>
                            )
                        }
                    </Fragment>
                </Toolbar>
            // </AppBar>
        );
    }
}

//checks prop types for auth
navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

//map auth state to global props
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user: state.user
});

//actions used
const mapActionsToProps = {
    logoutUser
};

//checks prop types for user
navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapActionsToProps)(navbar);