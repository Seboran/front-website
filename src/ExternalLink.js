import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * @param {Object} param0
 * @param {string} param0.title Name that appears on hove
 * @param {string} param0.href
 * @param {Object|string} param0.linkname
 */
export function ExternalLink({ title, href, linkname }) {
    return <Typography><a title={title} href={href} >{linkname}</a></Typography>;
}

ExternalLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    linkname: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};