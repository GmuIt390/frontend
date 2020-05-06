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

class high extends Component {
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
                    <h1>High Intensity Workouts</h1>
                    <p>
                        <div id="graphic3"></div>
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
                                <li> 3 Sets of warm up dumbell chest press </li>
                                <li> 3 Sets of bench press with weight increase until you reach max bench press weight</li>
                                <li> 3 Sets of decline bench press with weight increase until you reach max press weight</li>
                                <li> 3 Sets of incline bench press with weight increase until you reach max press weight</li>
                                <li> 3 Sets of dumbell chest butterflies </li>
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
                            <li> 3 Sets of alternating dumbbell bicep curls with weight increase </li>
                            <li> 3 Sets of underhand lat pull-down  </li>
                            <li> 5 Cable biceps curl with last set being dropset </li>
                            <li> 5 Cable triceps press-down with last set being dropset </li>
                            <li> 3 Sets of triceps skull crushers </li>
                            <li> 3 Sets of triceps dips </li>
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
                            <li> 3 Sets of bent-over rows </li>
                            <li> 4 Sets of lat pull-down </li>
                            <li> 3 Sets of shoulder overhead press </li>
                            <li> 5 Dumbbell lateral raise </li>
                            <li> 5 Bar upright rows </li>
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
                                <li> 3 Sets of squats with weight increase </li>
                                <li> 3 Sets of split squat </li>
                                <li> 3 Sets of front squats with weight increase </li>
                                <li> 5 Sets of dumbbell stepup </li>
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
                            <li> 5 Sets of single-leg deadlift </li>
                            <li> 3 Sets of deadlift with weight increase </li>
                            <li> 5 Sets of leg Press </li>
                            <li> 5 Sets of dumbbell squats </li>
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
                            <li> 5 Sets of weighted calf raise </li>
                            <li> 3 Sets of barbell hip thrust </li>
                            <li> 3 Sets of leg extension </li>
                            <li> 5 Sets of hamstring curl </li>
                            <li> 5 Sets sumo squats </li>
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
                                <li> 3 Sets of dumbbell cruches </li>
                                <li> 3 Sets of tuck and crunch </li>
                                <li> 3 Sets of seated twist </li>
                                <li> 3 Sets of bicycle crunches </li>
                                <li> 3 Sets of 1 minute plank </li>
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
                            <li> 3 Sets of hanging leg raise </li>
                            <li> 3 Sets of hanging knee raise twist </li>
                            <li> 3 Sets of hanging bicycles </li>
                            <li> 3 Sets of garhammer raise </li>
                            <li> 3 Sets of 1 minute plank </li>
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
                            <li> 3 Sets of cable isometric hold </li>
                            <li> 3 Sets of cable oblique crunch </li>
                            <li> 3 Sets of overhead kneeling cable hold </li>
                            <li> 3 Sets of TRX pike </li>
                            <li> 3 Sets of lying side raise </li>
                            <li> 3 Sets of 1 minute plank </li>
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

export default withStyles(styles)(high);