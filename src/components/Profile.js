import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import MyButton from '../util/myButton';

//material ui components
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//redux
import { connect } from 'react-redux';
import { logoutUser,uploadImage } from '../redux/actions/userActions';

//npm install --save @material-ui/icons
//icons
import LocationOn from '@material-ui/icons/LocationOn';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

const styles = (theme) => ({
    paper: {
        padding: 20
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
    }
});

class Profile extends Component {
    //profile image upload method
    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image',image,image.name);
        this.props.uploadImage(formData);
    };
    //upload button method
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };
    //logout method
    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const { classes,
            user: {
                credentials: { handle,createdAt,imageUrl,bio,location },
                loading,
                authenticated
            }
        } = this.props;

        //check login
        let profileMarkup = !loading ?
            //if loaded
            (authenticated ?
                //if auth
                (
                    <Paper className={classes.paper}>
                        <div className={classes.profile}>
                            <div className="image-wrapper">
                                <img src={imageUrl} alt="profile" className="profile-image"/>
                                <input
                                    type="file"
                                    id="imageInput"
                                    hidden="hidden"
                                    onChange={this.handleImageChange}
                                />
                                <MyButton
                                    tip="Edit Profile Picture"
                                    onClick={this.handleEditPicture}
                                    btnClassName="button"
                                >
                                    <EditIcon color="primary"/>
                                </MyButton>
                            </div>
                            <hr/>
                            <div className="profile-details">
                                <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
                                    @{handle}
                                </MuiLink>
                                <hr/>
                                {bio && <Typography variant="body2">{bio}</Typography>}
                                <hr/>
                                {location && (
                                    <Fragment>
                                        <LocationOn color="primary"/> <span>{location}</span>
                                        <hr/>
                                    </Fragment>
                                )}
                                <CalendarToday color="primary"/>{' '}
                                <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                            </div>
                            <MyButton
                                tip="Logout"
                                onClick={this.handleEditPicture}
                            >
                                <KeyboardReturn color="primary"/>
                            </MyButton>
                            <EditDetails/>
                        </div>
                    </Paper>
                )
                //else not auth
                : (
                    <Paper className={classes.paper}>
                        <Typography variant="body2" align="center">
                            No profile found, please login again
                        </Typography>
                        <div className={classes.buttons}>
                            <Button variant="contained" color="primary" component={Link} to="/login">
                                Login
                            </Button>
                            <Button variant="contained" color="secondary" component={Link} to="/login">
                                Signup
                            </Button>
                        </div>
                    </Paper>
                )
            ) 
            //else loading 7.20?
            : (<p>Loading...</p>)

        return profileMarkup;
    }
};

//map user state to global props
const mapStateToProps = (state) => ({
    user: state.user
});

//actions used
const mapActionsToProps = {
    logoutUser,
    uploadImage
};

//checks prop types for user
Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Profile));