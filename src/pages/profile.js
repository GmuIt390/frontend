import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from '../components/EditDetails';
import MyButton from '../util/myButton';

//import components
import Navbar from '../components/navbar';

//material ui components
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//redux
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actions/userActions';

//npm install --save @material-ui/icons
//icons
import LocationOn from '@material-ui/icons/LocationOn';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
    paper: {
        padding: 20
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center'
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
            // margin: '20px 10px'
        }
    }
});

class profile extends Component {
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
                                <MyButton
                                    tip="Edit Profile Picture"
                                    onClick={this.handleEditPicture}
                                    btnClassName="button"
                                >
                                <img src={imageUrl} alt="profile" className="profile-image"/>
                                </MyButton>
                                <input
                                    type="file"
                                    id="imageInput"
                                    hidden="hidden"
                                    onChange={this.handleImageChange}
                                />
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
                                <div>
                                    <EditDetails/>
                                </div>
                            </div>
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

        // return profileMarkup;
        return (
            <>
                <div id="header">
                    <div id="logo">
                        <div id="logo_text">
                        <h1><a href="index.html">GYM World</a></h1>
                        <h2>Fitness|Health|Exercise</h2>
                        </div>
                    </div>
                    <div class="navbar">
                        <Navbar/>
                    </div>
                </div>
                <br/><br/>
                <div>
                    {profileMarkup}
                </div>
            </>
        )
    }
};

//map user state to global props
const mapStateToProps = (state) => ({
    user: state.user
});

//actions used
const mapActionsToProps = {
    uploadImage
};

//checks prop types for user
profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(profile));