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

//login rendering
class login extends Component {
    //default fields
    constructor() {
        super();
        this.state ={
            email: '',
            password: '',
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
        //login fields for userData object
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        //process login
        axios.post('/login',userData)
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
                        Login
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
                                Login
                                {loading && (
                                    //progress icon
                                    <CircularProgress size={30} className={classes.progress}/>
                                )}
                        </Button>
                        <br/>
                        <small>Don't have an account? Sign up <Link to="/signup">here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

//checks prop types for login
login.propTypes = {
        classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);