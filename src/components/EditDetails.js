import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../util/myButton';

//material ui components
import ToolTip from '@material-ui/core/ToolTip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//redux
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';

//npm install --save @material-ui/icons
//icons
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
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
        position: 'relative',
        float: 'right'
    },
    progress: {
        position: 'absolute'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    }
})

class EditDetails extends Component {
    //initialize user state
    state = {
        bio: '',
        location: '',
        open: false
    };
    //set user details
    componentDidMount() {
        const { credentials } = this.props;
        this.mapUserDetailToState(credentials);
    }
    //open dialog function
    handleOpen = () => {
        this.setState({ open: true });
        this.mapUserDetailToState(this.props.credentials);
    }
    //close dialog function
    handleClose = () => {
        this.setState({ open: false });
    }
    //map form input to global state
    mapUserDetailToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            location: credentials.location ? credentials.location : ''
        });
    }
    //targets form field and allows change of target value
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
    //submit function
    handleSubmit =() => {
        const userDetails ={
            bio: this.state.bio,
            location: this.state.location
        };
        this.props.editUserDetails(userDetails);
        this.handleClose();
    }
    render() {
        const {classes } = this.props;
        return (
            <Fragment>
                <MyButton
                    tip="Edit Details"
                    onClick={this.handleOpen}
                    btnClassName={classes.button}
                >
                    <EditIcon color="primary"/>
                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Edit Your Details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                name="bio"
                                type="text"
                                label="Bio"
                                multiline
                                rows="3"
                                placeholder="A short bio about yourself"
                                className={classes.textField}
                                value={this.state.bio}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name="location"
                                type="text"
                                label="Location"
                                placeholder="Where you live"
                                className={classes.textField}
                                value={this.state.location}
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
};

//map user state to global props
const mapStateToProps = (state) => ({
    credentials: state.user.credentials
});

//actions used
const mapActionsToProps = {
    editUserDetails
};

//checks prop types for user
EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(EditDetails));