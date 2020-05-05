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
                                <li> Bench Press  </li>
                                <li> Chest Dip </li>
                                <li>  Push-ups</li>
                                <li> Machine Press </li>
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
                            <li>Upright Row  </li>
                            <li> Shoulder Press </li>
                            <li>Arnold Press  </li>
                            <li> Front Cable Raise </li>
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
                            <li> Back Extention </li>
                            <li>Bent Over Row  </li>
                            <li>Seated Row  </li>
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
                                <li> Box Jump </li>
                                <li> Box Squat </li>
                                <li>Bulgarian Split Squat  </li>
                                <li> Cable Pull </li>
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
                            <li> Calf Press </li>
                            <li>Leg Press  </li>
                            <li> Deadlift Band </li>
                            <li> Deadlift Barbell </li>
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
                            <li> Front Squat </li>
                            <li> Glute Ham Raise </li>
                            <li>High Knee Skips  </li>
                            <li>Jump Squat  </li>
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
                                <li>Bicyle Crunch   </li>
                                <li> Ab Wheel </li>
                                <li> Cable Crunch  </li>
                                <li> Cable Twist  </li>
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
                            <li> Crunch Machine  </li>
                            <li>  Cross Body Crunch</li>
                            <li> Decline Crunch </li>
                            <li> Crunch Ball </li>
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
                            <li>Flat Knee Raise   </li>
                            <li> Flat Leg Raise  </li>
                            <li> Hanging Leg Raise  </li>
                            <li>Hanging Leg Raise  </li>
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