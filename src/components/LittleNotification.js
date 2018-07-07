import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'

import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core';

/**
 * Displays the little notification bar with the required message
 * @param {string} message The displayed message
 */
let openLittleNotificationFn;

const styles = theme => ({
    close: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
    },
});

class LittleNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: ''
        };
    }

    componentDidMount() {
        openLittleNotificationFn = this.openLittleNotification;
    }

    openLittleNotification = (message) => {
        this.setState({
            open: true,
            message
        }, () => {
            setTimeout(this.handleClose, 5000);
        });
        
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }



    render() {

        const { classes } = this.props;

        return (
            <Snackbar 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={this.state.open}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id='message-id'>{this.state.message}</span>}
                action={
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                } />
        );
    }
}

export default withStyles(styles)(LittleNotification);

LittleNotification.propTypes = {
    classes: PropTypes.object.isRequired
}

/**
 * Displays the little notification bar with the required message
 * @param {string} message The displayed message
 */
export function openLittleNotification(message) {
    openLittleNotificationFn(message);
}