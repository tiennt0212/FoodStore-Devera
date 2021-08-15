import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Button.css';

export const Button = ({ primary, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      className= {["button",mode].join(' ')}
      >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  label: 'Simple Button',
  onClick: undefined,
};
