import React from 'react';
import PropTypes from 'prop-types';

import './SideBar.css';
import Router from 'react-router-dom/Router';

/**
 * 
 * @param {Object} props 
 * @param {Object[]} props.children
 */
export default function SideBar(props) {

    const { children } = props;

    return (
        <div className='side-menu'>
            {React.Children.map(children, (child, index) => React.cloneElement(child, { key: index, className: 'menu-item'}))}
        </div>
    );
};
