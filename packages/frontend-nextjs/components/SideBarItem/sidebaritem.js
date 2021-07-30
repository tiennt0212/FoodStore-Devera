import React from 'react';
import PropTypes from 'prop-types';
import DynamicIcon from '../DynamicIcon/dynamicicon'
import './sidebaritem.css'

const ItemSideBar = (props) => {
    const { name } = props;
    return (
        <div className="item">
            <div className="class1">
                <div className="curve-top"></div>
                <div className="class2">
                    <DynamicIcon iconName={name} className="icon"></DynamicIcon>
                </div>
                <div className="curve-bot"></div>
            </div>
        </div>
    )
}

ItemSideBar.propTypes = {
    name: PropTypes.string,
}

ItemSideBar.defaultProps = {
    name: 'home'
}

export default ItemSideBar;