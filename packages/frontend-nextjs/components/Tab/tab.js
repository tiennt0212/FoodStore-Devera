import React from 'react';
import PropTypes from 'prop-types';
// import './tab.css'

const Tab = (props) => {
    const {text}=props
    return (
        <div className='tab'>
            {text}
        </div>
    )
}

Tab.propTypes={
    text: PropTypes.string,
}

Tab.defaultProps={
    text: 'Defaut Tab',
}

export default Tab;