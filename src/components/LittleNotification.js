import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

/**
 * Displays the little notification bar with the required message
 * @param {string} message The displayed message
 */
let openLittleNotificationFn;

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
        return (
            <Snackbar 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={this.state.open}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id='message-id'>{this.state.message}</span>}
            />
        );
    }
}

export default LittleNotification;

/**
 * Displays the little notification bar with the required message
 * @param {string} message The displayed message
 */
export function openLittleNotification(message) {
    openLittleNotificationFn(message);
}