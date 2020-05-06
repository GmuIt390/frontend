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

class low extends Component {
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
                    <h1>Low Intensity Workouts</h1>
                    <p>
                        <div id="graphic1"></div>
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
                                <li> 10 Chest fly </li>
                                <li> 12 Alternating curtsy lunge plus arm circles </li>
                                <li> 5 Reverse fly </li>
                                <li> 2 Alternating side lunge to overhead reach   </li>
                                <li> 1 Laterial Raise </li>
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
                            <li> 5 Ski squat &amp; push pull to knee &amp; pull down </li>
                            <li> 10 Bicep curl </li>
                            <li> 2 Sumo squat to alternating side leg raise </li>
                            <li> 5 Tricep kickback </li>
                            <li> Front jack </li>
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
                            <li> 10 Bidges with chest press </li>
                            <li> 2 Step up with reverse lunge </li>
                            <li> 5 Plank jacks </li>
                            <li> Dumbbell deadlift </li>
                            <li> 3min Mock jumping rope (with low jump) </li>
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
                                <li> Banded lateral walk </li>
                                <li> Kettlebell swing </li>
                                <li> Dumbbell deadlift </li>
                                <li> Hip openers </li>
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
                            <li> Single-leg deadlift </li>
                            <li> Glute bridge </li>
                            <li> Monster walk </li>
                            <li> Donkey kick </li>
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
                            <li> Stability ball hamstring curls </li>
                            <li> Reverse lunge </li>
                            <li> Kettlebell swing </li>
                            <li> Sliding hamstring curl </li>
                            <li> Lateral lunge </li>
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
                                <li> Stability ball crunches </li>
                                <li> Long-leg crunch </li>
                                <li> Side plank </li>
                                <li> Balancing planks </li>
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
                            <li> Twists </li>
                            <li> Medicine ball twist </li>
                            <li> Bicycle crunches </li>
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
                            <li> Opposite arm and leg extentions </li>
                            <li> Planks </li>
                            <li> Side planks with twist </li>
                            <li> Exercise ball passes </li>
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

export default withStyles(styles)(low);