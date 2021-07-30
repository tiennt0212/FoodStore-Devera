import React from 'react';
import PropTypes from 'prop-types';
import './content.css';
import DynamicIcon from '../DynamicIcon/dynamicicon'

export const Content = (props) => {
    const { icon, text, selected } = props;
    return (
        <button type="button" className="content">
            {selected && 
            <div className="check-circle">
                <DynamicIcon iconName='checkcirclesharp' size="small"></DynamicIcon>
            </div>
            }
            <DynamicIcon iconName={icon} className='icon' size="large"></DynamicIcon>
            <div className='text'>
                {text}
            </div>
        </button>
    );
}

Content.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
}

Content.defaultProps = {
    icon: '',
    text: 'Unknown',
    selected: true,
}