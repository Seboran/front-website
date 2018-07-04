import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

/**
 * 
 * @param {Object} props 
 * @param {string} props.title
 */
export default function PageTitle(props) {
    const {title} = props;
    return (
        <Typography variant="headline">{title}</Typography>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}