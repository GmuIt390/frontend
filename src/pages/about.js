import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

//import components
import Navbar from '../components/navbar';

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

class about extends Component {
    render() {
        // return profileMarkup;
        return (
            <>
                <div id="header">
                    <div class="navbar">
                        <Navbar/>
                    </div>
                    <div id="logo">
                        <div id="logo_text">
                        <h1><a href="/">GYM World</a></h1>
                        <h2>Fitness|Health|Exercise</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1>About Us</h1>
                    <p> 
                        GymWorld is founded upon health and fitness for your level and comfort. We offer a variety of exercises that can be done at home 
                        or the gym. For now we have a select few, inlcuding upper, lower and abdominal body. These span across lower, medium and higher intensity.
                        Stay tuned for more to come in the future!
                    </p>
                </div>
                <br/>
                <div id="footer">
                <p><a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a> | <a href="/news">News</a></p>
                <p><a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a></p>
                </div>
            </>
        )
    }
};

export default withStyles(styles)(about);