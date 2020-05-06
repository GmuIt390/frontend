import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//material ui components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogAction from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

//import redux
import { connect } from 'react-redux';
import { deletePost } from '../redux/actions/dataActions';

const styles = {
    deleteButton: {
        position: 'absolute',
        left: '80%',
        top: '10%'
    }
}

class DeletePost extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    deletePost = () => {
        this.props.deletePost(this.props.postId);
        this.setState({ open: false });
    }
    render() {
        const { classes } = this.props;
        return (
            <>
                <Button
                    tip="Delete Post"
                    onClick={this.handleOpen}
                    className={classes.deleteButton}
                >
                    <DeleteOutline color="secondary"/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>
                        Are you sure want to delete this post?
                    </DialogTitle>
                    <DialogAction>
                        <Button
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={this.deletePost}
                            color="secondary"
                        >
                            Delete
                        </Button>
                    </DialogAction>
                </Dialog>
            </>
        )
    }
}

DeletePost.propTypes = {
    deletePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, { deletePost })(withStyles(styles)(DeletePost));