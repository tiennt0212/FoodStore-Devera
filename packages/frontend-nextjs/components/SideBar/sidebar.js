import React from 'react';
import PropTypes from 'prop-types';
import SideBarItem from '../SideBarItem/sidebaritem';
// import './sidebar.css';

const SideBar = (props) => {
    const { items } = props;
    return (
        <div className='sidebar'>
            {
                items &&
                items.map((iconName) => <SideBarItem className='item' iconName={iconName}></SideBarItem>)
            }
        </div>
    )
}

SideBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(SideBarItem.propTypes)),
}

SideBar.defaultProps = {
    // items: [
    //     {
    //         id: 1,
    //         item: 'home',
    //     },
    //     {
    //         id: 2,
    //         item: 'settings',
    //     },
    //     {
    //         id:3,
    //         item: 'logout'
    //     }
    // ]
}

export default SideBar;