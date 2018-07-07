import React, { Component } from 'react';
import PageTitle from './components/PageTitle';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '80%',
      minwidth: '300px'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
});



class Projects extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <PageTitle title='Projects' />
                <div className={classes.root} >
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>
                        <GridListTile>
                        </GridListTile>



                    </GridList>
                </div>
            
            </div>
        )
    }

}

export default withStyles(styles)(Projects);