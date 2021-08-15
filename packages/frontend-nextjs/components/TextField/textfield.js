import React from 'react';
import PropTypes from 'prop-types';
// import './textfield.css'
import DynamicIcon from '../DynamicIcon/dynamicicon'

const TextField = (props) => {
    const { icon, placeholder, text } = props;
    return (
        <div className="text-field">
            <div>
                {icon &&
                    <div className="icon">
                        <DynamicIcon iconName={icon}></DynamicIcon>
                    </div>
                }
            </div>
            <input
                placeholder={placeholder}
                defaultValue={text}
            />
        </div>
    )
}

TextField.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    text: PropTypes.string,
}

TextField.defaultProps = {
    placeholder: "This is PlaceHolder",
    text: null,
}

export default TextField;