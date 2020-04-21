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

class contact extends Component {
    render() {
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
                <div className="container">
                    <h1>Contact Us</h1>
                    <p><div id="after_submit"></div>
                        <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
                            <div class="row">
                                <label class="required" for="name">Your name:</label><br/>
                                <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
                                <span id="name_validation" class="error_message"></span>
                            </div>
                            <div class="row">
                                <label class="required" for="email">Your email:</label><br/>
                                <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
                                <span id="email_validation" class="error_message"></span>
                            </div>
                            <div class="row">
                                <label class="required" for="message">Your message:</label><br/>
                                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
                                <span id="message_validation" class="error_message"></span>
                            </div>
                                <input id="submit_button" type="submit" value="Send email"/>
                        </form>
                        <br/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.1156667052605!2d-77.3095492843509!3d38.82981177958114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e607b427ebd%3A0xd766a653e6557544!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1583343365456!5m2!1sen!2sus"
                            width="600" height="450" frameborder="0" allowfullscreen=""
                        ></iframe>
                        <p><br/><br/>NOTE: A contact form such as this would require some way of emailing the input to an email address.</p>
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

export default withStyles(styles)(contact);