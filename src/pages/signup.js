import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

//material ui form components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//css
const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 10px auto',
        height: '50px',
        width: '50px'
    },
    pageTitle: {
        margin: '10px auto 20px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        position: 'relative'
    },
    progress: {
        position: 'absolute'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    }
}

//signup rendering
class signup extends Component {
    //default fields
    constructor() {
        super();
        this.state ={
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            loading: false, //loading after submit
            errors: {}
        }
    }
    //redirect after submit
    handleSubmit = (event) => {
        event.preventDefault();
        //change load flag
        this.setState({
            loading: true
        });
        //signup fields for userData object
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }
        //process signup
        axios.post('/signup',newUserData)
        .then((result) => {
            console.log(result.data);
            localStorage.setItem('FBIdToken', `Bearer ${result.data.token}`);
            this.setState({
                loading: false
            });
            //actual redirection
            this.props.history.push('/');
        })
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loading: false
            });
        });
    }
    //targets form field and allows change of target value
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
    render() {
        //bring prop styles
        const { classes } = this.props;
        //bring errors and load state
        const { errors,loading} = this.state;
        return (
            //create responsive division on page
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="logo" className={classes.image}/>
                    <Typography variant="h4" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    {/*login form*/}
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            helperText={errors.email}
                            //display null email error
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth/>
                        <TextField id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            //display null password error
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth/>
                        <TextField id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            className={classes.textField}
                            //display null password error
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            fullWidth/>
                        <TextField id="handle"
                            name="handle"
                            type="text"
                            label="Handle"
                            className={classes.textField}
                            //display null password error
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            value={this.state.handle}
                            onChange={this.handleChange}
                            fullWidth/>
                        {errors.general && (
                            //display wrong credential error
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            disabled={loading}>
                                Signup
                                {loading && (
                                    //progress icon
                                    <CircularProgress size={30} className={classes.progress}/>
                                )}
                        </Button>
                        <br/>
                        <small>Already have a login? Login <Link to="/login">here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

//checks prop types for signup
signup.propTypes = {
        classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup);