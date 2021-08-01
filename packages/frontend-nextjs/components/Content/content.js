/*=================================
GOOD JOB, Tien!
Reference link: https://reactjs.org/docs/hooks-state.html
===================================*/

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './content.css';
import DynamicIcon from '../DynamicIcon/dynamicicon';

export const Content = (props) => {
    const { icon, text } = props;
    const [selected, changeState] = useState(false);
    return (
        <button type="button"
            className={selected ? 'content-selected' : 'content-unselected'}
            onClick={() => changeState(!selected)}>
            {
                selected &&
                <div className="check-circle">
                    <DynamicIcon iconName='checkcirclesharp' size="small"></DynamicIcon>
                </div>
            }
            <DynamicIcon iconName={icon} className='icon' size="large"></DynamicIcon>
            <div className='text'>{text}</div>
        </button>
    );
}

Content.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
}

Content.defaultProps = {
    icon: '',
    text: 'Unknown',
}