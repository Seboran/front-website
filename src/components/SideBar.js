import React from 'react';
import './SideBar.css';

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
