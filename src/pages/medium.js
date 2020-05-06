import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

//import components
import Navbar from '../components/navbar';

//material ui form components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

class medium extends Component {
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
                    <h1>Medium Intensity Workouts</h1>
                    <p>
                        <div id="graphic2"></div>
                    </p>
                    <h2>Upper Body</h2>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>Exercise One</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            <ol>
                                <li> Bench press </li>
                                <li> Chest dip </li>
                                <li> Push-ups </li>
                                <li> Machine press </li>
                            </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Two</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Upright row </li>
                            <li> Shoulder press </li>
                            <li> Arnold press </li>
                            <li> Front cable raise </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Three</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Back extention </li>
                            <li> Bent over row  </li>
                            <li> Seated row  </li>
                            <li> Deadlift </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <h2>Lower Body</h2>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise One</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            <ol>
                                <li> Box jump </li>
                                <li> Box squat </li>
                                <li> Bulgarian split squat </li>
                                <li> Cable pull </li>
                            </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Two</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Calf press </li>
                            <li> Leg press </li>
                            <li> Deadlift band </li>
                            <li> Deadlift barbell </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Three</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Front squat </li>
                            <li> Glute ham raise </li>
                            <li> High knee skips </li>
                            <li> Jump squat </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <h2>Abdominal</h2>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise One</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            <ol>
                                <li> Bicycle crunch </li>
                                <li> Ab wheel </li>
                                <li> Cable crunch </li>
                                <li> Cable twist </li>
                            </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Two</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Crunch machine  </li>
                            <li> Cross body crunch</li>
                            <li> Decline crunch </li>
                            <li> Crunch ball </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Exercise Three</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ol>
                            <li> Flat knee raise </li>
                            <li> Flat leg raise </li>
                            <li> Hanging leg raise </li>
                            <li> Hanging leg raise </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

export default withStyles(styles)(medium);