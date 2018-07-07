import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from './components/PageTitle';
import MobileStepper from '@material-ui/core/MobileStepper';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { Typography, Button, Paper } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
    root: {
        maxWidth: 600,
        width: '100%',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
      },
});

const listProjects = [
    {
        title: 'This website',
        description: <Typography variant='body1'>This website has been developed and designed using ReactJS, nodeJS and Material-ui. <br /><br />
        I built it to test new UI/UX designs and to challenge myself using top-notch technologies.<br /><br/>
        The client part of this app is hosted on my school's servers, while the server is hosted on a heroku domain.<br/><br/>
        </Typography>
    },
    {
        title: 'Smiling plants',
        description: 'Project created during a startup weekend'
    },
    {
        title: 'Fablab Marseille',
        description: 'A third place for prototyping and innovation'
    },
]

class Projects extends Component {

    state = {
        activeStep: 0,
      };
    
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {

        const { classes, theme } = this.props;
        const { activeStep } = this.state;

        const maxSteps = listProjects.length;

        return (
            <div>
                <PageTitle title='Projects' />
                    <div className='main-content'>
                    <div className={classes.root} style={{ padding: '20px' }} >
                        <Paper>
                        <SwipeableViews 
                            enableMouseEvents
                            index={this.state.activeStep}
                            
                            >
                            {
                                listProjects.map(({title, description}, index) => 
                                <div 
                                    className='paper'
                                    style={{height: '500px'}} 
                                    key={index}>
                                    <Typography variant='headline'>{title}</Typography>
                                    {description}
                                </div>)
                            }

                        </SwipeableViews>
                        
                        <MobileStepper 
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            className={classes.mobileStepper}
                            nextButton={
                                <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Back
                                </Button>
                            }
                        />
                        </Paper>
                </div>
                </div>
            
            </div>
        )
    }

}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true})(Projects);