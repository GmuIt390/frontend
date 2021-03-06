import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//authenticates routing
const AuthRoute = ({component: Component, authenticated, ...rest}) => (
    <Route
        { ...rest }
        render={(props) => 
            authenticated === true ? <Redirect to='/'/> : <Component { ...props}/>
        }
    />
);

//map route state to global props
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

//checks prop types for user auth
AuthRoute.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AuthRoute);