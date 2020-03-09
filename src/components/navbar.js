import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/myButton';

//material UI navigation
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//npm install --save @material-ui/icons
//icons
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';

class navbar extends Component {
    render() {
        const { authenticated } = this.props
        return (
            //Each button is a navbar menu item
            <AppBar>
                <Toolbar className="nav-container">
                    {authenticated ? (
                            <Fragment>
                                <MyButton tip="Post">
                                    <AddIcon/>
                                </MyButton>
                                <Link to="/">
                                <MyButton tip="Home">
                                    <HomeIcon/>
                                </MyButton>
                                </Link>
                                <MyButton tip="Notifications">
                                    <Notifications/>
                                </MyButton>
                            </Fragment>
                        )
                        : (
                            <Fragment>
                                <Button color="inherit" component={Link} to="/">
                                    Home
                                </Button>
                                <Button color="inherit" component={Link} to="/login">
                                    Login
                                </Button>
                                <Button color="inherit" component={Link} to="/signup">
                                    Signup
                                </Button>
                            </Fragment>
                        )
                    }
                </Toolbar>
            </AppBar>
        );
    }
}

//checks prop types for auth
navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

//map auth state to global props
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(navbar);