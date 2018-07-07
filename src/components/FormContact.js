import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './FormContact.css'
import { Button } from '@material-ui/core';
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

class FormContact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            mainText: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, subject, mainText} = this.state;

        if (!email) return openLittleNotification('You must put your email address');

        const emailRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                subject: subject,
                message: mainText
            })
        };

        

        

        fetch('/users/contact', emailRequest)
        .then(res => {
            if (res.status === 429) return openLittleNotification('Too many emails sent, try again later');
            if (res.status === 500 || res.status === 404) return openLittleNotification('Issue with server, please try again later');
            return openLittleNotification('Message sent');
        })
        .catch(err => openLittleNotification('An error occured, try again later'));

        
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
            </form>
        );
    }

}

FormContact.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormContact);