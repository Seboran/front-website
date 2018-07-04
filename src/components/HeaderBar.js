// pkg
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
    },
};

class HeaderBar extends Component {
    render() {
        const { classes, title } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    {title}
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default withStyles(styles)(HeaderBar);