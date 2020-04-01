import React, { Component } from 'react';
//npm install --save axios
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//import components
import Post from '../components/Post';
import Profile from '../components/Profile';
import IndexHeader from "../components/Headers/IndexHeader.js";
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
                {/* <IndexHeader/> */}
                {/* <div
                    className="page-header section-dark"
                    style={{
                    backgroundImage:
                        "url(" + require("../assets/img/antoine-barres.jpg") + ")"
                    }}
                ></div> */}
                <div className="container">
                    <div id="banner"></div>
                    <br/><br/>
                    <Grid container spacing={10}>
                        <Grid item sm={8} xs={12}>
                            <h1>Welcome to GymWorld</h1>
                            <p>WHAT WE OFFER!<br/>
                            
                            1. Variety of Exercises ranging from Upper body to lower body. <br/>
                            2. A range of intensitites that you can follow around for your comfort level!<br/>
                            3. Execise that can be done at the gym, home or altered for yourself.<br/>
                            </p>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div class="sidebar_item">
                                <h3>Blog</h3>
                                <h4>Main Content</h4>
                                <h5>Content</h5>
                                <p>More Content<br /><a href="#">Read more</a></p>
                            </div>
                            <h3>Useful Links</h3>
                            <ul>
                            <li><a href="#">link 1</a></li>
                            <li><a href="#">link 2</a></li>
                            <li><a href="#">link 3</a></li>
                            <li><a href="#">link 4</a></li>
                            </ul>
                            <h3>Search</h3>
                        </Grid>
                    </Grid>
                    <br/><hr/><br/>
                    <Grid container spacing={10}>
                        <Grid item sm={8} xs={12}>
                            {recentPostMarkup}
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Profile/>
                        </Grid>
                    </Grid>
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