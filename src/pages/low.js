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
                                <li> 10 Chest Fly   </li>
                                <li> 12 Alternating Curtsy Lunge plus Arm Circles   </li>
                                <li> 5 Reverse Fly </li>
                                <li> 2	Alternating Side Lunge to Overhead Reach   </li>
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
                            <li> 5 Ski Squat &amp; Push Pull to Knee &amp; Pull Down </li>
                            <li>  10 Bicep Curl </li>
                            <li> 2 Sumo Squat to Alternating Side Leg Raise </li>
                            <li> 5 Tricep Kickback </li>
                            <li> Front Jack </li>
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
                            <li>  10 Bidges with chest press </li>
                            <li> 2 Steop Up with Reverse Lunge </li>
                            <li> 5 Plank Jacks </li>
                            <li> Dumbbell Deadlift </li>
                            <li> 3min Mock Jumping Rope(With low jump) </li>
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
                                <li> Bandede Later Walk </li>
                                <li> Kettlebell Swing </li>
                                <li> Dumbbrll Deadlift </li>
                                <li> Hip Openers </li>
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
                            <li> Single-Leg Deadlift </li>
                            <li> Glute Bridge </li>
                            <li> Monster Walk </li>
                            <li> Donkey Kick </li>
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
                            <li> Stability Ball Hamstring Curls </li>
                            <li> Reverse Lunge </li>
                            <li> Kettlebell Swing </li>
                            <li> Sliding Hamstring Curl </li>
                            <li> Lateral Lunge </li>
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
                                <li> Stability Ball Cruches </li>
                                <li> Long-Leg Crunch </li>
                                <li> Side Plan </li>
                                <li> Balancing Planks </li>
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
                            <li> Medicine Ball Twist </li>
                            <li> Bicylce Cruches </li>
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
                            <li> Opposite Arm and Leg Extentions </li>
                            <li> Planks </li>
                            <li>Side planks with twist </li>
                            <li> Exercise ball passes </li>
                        </ol>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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

export default withStyles(styles)(low);