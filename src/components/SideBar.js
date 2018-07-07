import React from 'react';
import withSizes from 'react-sizes';
import './SideBar.css';

/**
 * 
 * @param {Object} props 
 * @param {Object[]} props.children
 * @param {string} props.display
 */
function SideBar(props) {

    const { children, display } = props;

    return (
        <div style={{display: display}} className='side-menu'>
            {React.Children.map(children, (child, index) => React.cloneElement(child, { key: index, className: 'menu-item'}))}
        </div>
    );
};

/**
 * 
 * @param {Object} param0
 * @param {number} param0.width 
 */
const mapSizesToProps = ({ width }) => ({
    display: width > 700 ? 'block' : 'none',
})

export default withSizes(mapSizesToProps)(SideBar);