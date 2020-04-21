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
                    <div id="banner"></div>
                    <br/><br/>
                    <h1 class="center">Welcome to GymWorld</h1>
                    <p class="center">WHAT WE OFFER!<br/>
                    
                        1. Variety of Exercises ranging from Upper body to lower body. <br/>
                        2. A range of intensitites that you can follow around for your comfort level!<br/>
                        3. Execise that can be done at the gym, home or altered for yourself.<br/>
                    </p>
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
                <p><a href="index.html">Home</a> | <a href="About-us.html">About Us</a> | <a href="Contact-us.html">Contact Us</a> | <a href="News.html">News</a></p>
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