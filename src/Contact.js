import React from 'react';
import PageTitle from './components/PageTitle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Contact.css'
import FormContact from './components/FormContact';

export default function Contact() {
    return (
        <div>
            <PageTitle title="Contact" />
            <div className='main-content' >
            <div className='wrapper' >
            <img style={{width: '100%'}} src='/images/moi.png' alt="myself" />
            </div>
            
            <Paper className='form' >
                <Typography>For any inquiries please contact me through this form</Typography>
                <FormContact />
            </Paper>
            
            </div>
        </div>
    );
}