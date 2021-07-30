import React from 'react';
import PropTypes from 'prop-types';
import './textfield.css'
import DynamicIcon from '../DynamicIcon/dynamicicon'

export const TextField = (props) => {
    const { icon, placeholder, text } = props;

    if (!icon) {
        return (
            <div className="box">
                <input
                    type="text"
                    className="textfield"
                    placeholder={placeholder}
                    defaultValue={text}
                />
            </div>
        )
    }
    else {
        return (
            <div className="box">
                <div className="icon">
                    <DynamicIcon iconName={icon}></DynamicIcon>
                </div>
                <span></span>
                <input
                    type="text"
                    className="textfield"
                    placeholder={placeholder}
                    defaultValue={text}
                />
            </div>
        )
    }
}

TextField.PropTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    text: PropTypes.string,
}

TextField.defaultProps = {
    placeholder: "This is PlaceHolder",
    text: null,
}