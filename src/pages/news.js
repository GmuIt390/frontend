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

class news extends Component {
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
                    <h1>News</h1>
                    <p>
                        GymWorld is an all new one-stop app for all your health and fitness needs. 
                        What sets us apart from the competition is that we don't lock our services behind an expensive paywall.  
                        We offer helpful advice for all stages of fitness from beginner to expert.  
                        We have exercises for both dedicated gym goers and stay-at-home people looking to improve their health.  
                        Whether you're a body builder or someone looking to squeeze in a quick workout on the go, we've got you covered. 
                        Stay tuned for our official launch coming soon!
                    </p>
                </div>
                <br/>
                <div id="footer">
                <p><a href="index.html">Home</a> | <a href="About-us.html">About Us</a> | <a href="Contact-us.html">Contact Us</a> | <a href="News.html">News</a></p>
                <p><a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a></p>
                </div>
            </>
        )
    }
};

export default withStyles(styles)(news);