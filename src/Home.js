import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withSizes from 'react-sizes';

/**
 * 
 * @param {Object} props 
 * @param {string} props.variant
 */
class Home extends Component {

    render() {
        const { variant } = this.props;
        return (
        <div>
            <Typography variant={variant} >nirina.fr</Typography>
            <div className='paper' >
                <Typography>I am a French student Engineer from the École Centrale de Marseille, interested in new technologies and entrepreneurship.<br /><br />
                    This website is a vitrine of my projects and a personnal place for me and my thoughts.
                </Typography>
            </div>
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