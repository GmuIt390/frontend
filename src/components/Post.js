import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
//npm install --save dayjs
import dayjs from 'dayjs';
import relatativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import MyButton from '../util/myButton';

//material ui card components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//redux components
import { connect } from 'react-redux';
import { likePost,unlikePost } from '../redux/actions/dataActions';

//icons
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
    card: {
        display: 'flex',
        margin: 'auto',
        marginBottom: 50
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class Post extends Component {
    //check for likes for post
    likedPost = () => {
        if(this.props.user.likes &&
            this.props.user.likes.find(
                (like) => like.postId === this.props.post.postId
            )) 
        {
            return true;
        }
        else {
            return false;
        }
    };
    //give like to post
    likePost = () => {
        this.props.likePost(this.props.post.postId);
    };
    unlikePost = () => {
        this.props.unlikePost(this.props.post.postId);
    };
    render() {
        dayjs.extend(relatativeTime);
        //extract fields from post
        const { classes,
            post:{
                body,
                createdAt,
                userImage,
                userHandle,
                // postId,
                likeCount,
                commentCount
            },
            user: {
                authenticated
            }
         } = this.props;
        //check for auth to use button
        const likeButton = !authenticated ? (
            //button to like
            <MyButton tip="like">
                <Link to="/login">
                    <FavoriteBorder color="primary"/>
                </Link>
            </MyButton>
        ) :
        //already liked?
        (
            this.likedPost() ? (
                <MyButton tip="Undo like" onClick={this.unlikePost}>
                    <FavoriteIcon color="primary"/>
                </MyButton>
            ) :
            (
                <MyButton tip="Like" onClick={this.likePost}>
                    <FavoriteBorder color="primary"/>
                </MyButton>
            )
        )
        return (
            //card rendering
            <Card className={classes.card}>
                <CardMedia
                    image={userImage}
                    title="Profile image"
                    className={classes.image}/>
                <CardContent className={classes.content}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary">
                        {userHandle}
                    </Typography>
                    {/*createdAt no nanoseconds?*/}
                    <Typography
                        variant="body2"
                        color="textSecondary">
                            {dayjs(createdAt).fromNow()}
                    </Typography>
                    {/**/}
                    <Typography
                        variant="body1">
                        {body}
                    </Typography>
                    {likeButton}
                    <span>{likeCount} Likes</span>
                    <MyButton tip="comments">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{commentCount} Comments</span>
                </CardContent>
            </Card>
        );
    }
}

//checks prop types for posts
Post.propTypes = {
    likePost: PropTypes.func.isRequired,
    unlikePost: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    user: state.user
});

//actions used
const mapActionsToProps = {
    likePost,
    unlikePost
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Post));