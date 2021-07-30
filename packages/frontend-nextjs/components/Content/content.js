import React from 'react';
import PropTypes from 'prop-types';
import './content.css';
import DynamicIcon from '../DynamicIcon/dynamicicon'

export const Content = (props) => {
    const { icon, text, selected } = props;
    return (
        <button type="button" className="content">
            <DynamicIcon iconName={icon} className='icon'></DynamicIcon>
            <div className='text'>
                {text}
            </div>
        </button>
    );
}

Content.PropTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
}

Content.defaultProps = {
    icon: '',
    text: 'Unknown',
}