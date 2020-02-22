import React, { Component } from 'react';
//npm install --save axios
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';

//home page rendering
class home extends Component {
    state = {
        posts: null
    }
    //get posts
    componentDidMount() {
        axios.get('/posts')
            .then((result) => {
                console.log(result.data);
                this.setState({
                    posts: result.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        //checks if posts exist and loaded
        let recentPostMarkup = this.state.posts ? (
            //renders all post from Post component
            this.state.posts.map((post) => <Post key={post.postId} post={post}/>)
        ) : <p>Loading...</p>
        return (
            //Create grid structure for posts
            <div>
                <Grid container spacing={10}>
                    <Grid item sm={8} xs={12}>
                        {recentPostMarkup}
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <p>Profile...</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default home;