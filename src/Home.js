import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withSizes from 'react-sizes';

/**
 * 
 * @param {Object} props 
 * @param {number} props.width
 */
class Home extends Component {

    render() {
        const { variant } = this.props;
        return (
        <div>
            <Typography variant={variant} >nirina.fr</Typography>
            <Typography>Nirina's personnal website</Typography>
        </div>
        );
    }   
}

/**
 * 
 * @param {Object} param0
 * @param {number} param0.width 
 */
const mapSizesToProps = ({ width }) => ({
    variant: width > 600 ? 'display4' : 'display2',
})

export default withSizes(mapSizesToProps)(Home);