import React from 'react';
import PropTypes from 'prop-types';
// import './dropdown.css';
import DynamicIcon from '../DynamicIcon/dynamicicon';

export const DropDown = (props) => {
    const {text} = props
    return(
        <div className="dropdown">
            <DynamicIcon iconName='arrowdropdown'></DynamicIcon>
            <div className='text'>{text}</div>
        </div>
    )
}
DropDown.propTypes = {
    text: PropTypes.string,
}

DropDown.defaultProps = {
    text: 'Dine In'
}

export default DropDown;