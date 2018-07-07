

import React, { Component } from 'react';
import axios from 'axios';
import * as EmailValidator from 'email-validator';

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './FormContact.css'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { openLittleNotification } from './LittleNotification';


const styles = theme => ({
    textField: {
      
      marginRight: theme.spacing.unit,
      width: '100%',
    },
    longTextField: {
      
      marginRight: theme.spacing.unit,
      width: 200,
      height: 200,
    },
    menu: {
      width: 200,
    },
});

const initialState = {
    email: '',
    subject: '',
    mainText: '',
    sending: false,
};
class FormContact extends Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            sending: true
        }, () => {

            const { email, subject, mainText } = this.state;

            if (!email || !subject || !mainText) {
                this.stopLoading();
                return openLittleNotification('You must fill all required fields');
            }

            if (!EmailValidator.validate(email)) {
                this.stopLoading();
                return openLittleNotification('You must fill a valid email address');
            }

            
            axios.post('https://nirina-back.herokuapp.com/users/contact', {
                email: email,
                subject: subject,
                message: mainText
            })
            .then(res => {
                this.stopLoading();

                if (res.status === 429) return openLittleNotification('Too many emails sent, try again later');
                if (res.status === 500 || res.status === 404) return openLittleNotification('Issue with server, please try again later');
                this.setState(initialState);

                return openLittleNotification('Message sent');
            })
            .catch(() => {
                this.stopLoading();
                openLittleNotification('An error occured, try again later');
            });

        })

    }

    /**
     * @param {string} name
     * @param {Object} event
     * @param {Object} event.target
     * @param {string} event.target.value
     */
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    /**
     * Stops the linear loading bar
     */
    stopLoading = () => {
        this.setState({ sending: false });
    }

    render() {

        const { classes } = this.props;

        return (
            <form 
            onSubmit={this.handleSubmit}
            className='container' autoComplete="on">
                <TextField 
                    id='email'
                    type='email'
                    label='Email'
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    required
                />
                <TextField
                    id='subject'
                    label='Subject'
                    className={classes.textField}
                    value={this.state.subject}
                    onChange={this.handleChange('subject')}
                    margin="normal"
                    required
                />
                <TextField 
                    id='maintext'
                    label='Body message'
                    className={classes.textField}
                    value={this.state.mainText}
                    onChange={this.handleChange('mainText')}
                    margin="normal"
                    required
                    multiline
                />
                <Button
                    type="validate"
                    onClick={this.handleSubmit}
                    style={{marginTop: 50}}
                    variant='outlined'
                    >
                    Send
                </Button>
                {this.state.sending && <LinearProgress />}
            </form>
        );
    }

}

FormContact.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormContact);