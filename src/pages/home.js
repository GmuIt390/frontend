import React, { Component } from 'react';
//npm install --save axios
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//import components
import Post from '../components/Post';
import Profile from '../components/Profile';

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
            <div>
                <Grid container spacing={10}>
                    <Grid item sm={8} xs={12}>
                        {recentPostMarkup}
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Profile/>
                    </Grid>
                </Grid>
            </div>
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