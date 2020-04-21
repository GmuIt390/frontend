import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/myButton';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

//redux
import { logoutUser } from '../redux/actions/userActions';

//material UI navigation
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//npm install --save @material-ui/icons
//icons
import AddIcon from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications';

class navbar extends Component {
    //logout method
    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const { authenticated } = this.props;
        return (
                <Toolbar className="nav-container">
                    <Fragment>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <div class="dropdown">
                            <button class="dropbtn">INTENSITY
                            <i class="fa fa-caret-down"></i>
                            </button>
                                <div class="dropdown-content">
                                <Button color="inherit" component={Link} to="/low">
                                    Low Intensity
                                </Button>
                                <Button color="inherit" component={Link} to="/medium">
                                    Medium Intensity
                                </Button>
                                <Button color="inherit" component={Link} to="/high">
                                    High Intensity
                                </Button>
                            </div>
                        </div>
                        <Button color="inherit" component={Link} to="/news">
                            News
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            About Us
                        </Button>
                        <Button color="inherit" component={Link} to="/contact">
                            Contact Us
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