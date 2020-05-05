import React, { Component } from 'react';
//npm install --save axios
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//import components
import Post from '../components/Post';
import Navbar from '../components/navbar';

//redux components
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions'; 

//home page rendering
class home extends Component {
    //get posts
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const{ posts,loading } = this.props.data;
        //checks if posts exist and loaded
        let recentPostMarkup = !loading ? (
            //renders all post from Post component
            posts.map((post) => <Post key={post.postId} post={post}/>)
        ) : <p>Loading...</p>
        return (
            //Create grid structure for posts
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
                    <div id="banner"></div>
                    <br/><br/>
                    <h1 class="center">Welcome to GymWorld</h1>
                    <p class="center">WHAT WE OFFER!<br/>
                    
                        1. Variety of Exercises ranging from Upper body to lower body. <br/>
                        2. A range of intensitites that you can follow around for your comfort level!<br/>
                        3. Execise that can be done at the gym, home or altered for yourself.<br/>
                    </p>
                    <br/><hr/>
                    <h1 class="center">Try Calculating Your BMI!</h1>
                    <div className="container">
                        <iframe class="center" src="https://bmicalculatorusa.com/widgets/widget.php?t=720x300"
                            width="720"
                            height="300">
                        </iframe>
                        <p class="center">
                            Supplied by <a href="https://bmicalculatorusa.com">BMI Calculator USA</a>
                        </p>
                    </div>
                    <br/><hr/>
                    <h1 class="center">Blog Posting</h1>
                    <br/><br/>
                    <div>
                    <Grid container spacing={20}>
                        {recentPostMarkup}
                    </Grid>
                    </div>
                    <br/><br/>
                </div>
                <div id="footer">
                <p><a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a> | <a href="/news">News</a></p>
                <p><a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a></p>
                </div>
            </>
        );
    }
}

//checks prop types for posts
home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    data: state.data
});

//actions used
const mapActionsToProps = {
    getPosts
}

export default connect(mapStateToProps,mapActionsToProps)(home);