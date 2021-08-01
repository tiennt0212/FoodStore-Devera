import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DynamicIcon from '../DynamicIcon/dynamicicon'
import './sidebaritem.css'

const ItemSideBar = (props) => {
    const { iconName } = props;
    const [selected, changeState] = useState(false);
    return (
        <div className={selected ? 'item item-gray' : 'item item-dark'}
            onClick={() => changeState(!selected)}
        >
            <div className="square curve-top"></div>
            <div className={selected ? 'inner item-selected' : 'inner item-unselected'}>
                <DynamicIcon iconName={iconName} size='large'></DynamicIcon>
            </div>
            <div className="square curve-bot"></div>
        </div>
    )
}

ItemSideBar.propTypes = {
    iconName: PropTypes.string,
}

ItemSideBar.defaultProps = {
    iconName: 'home'
}

export default ItemSideBar;