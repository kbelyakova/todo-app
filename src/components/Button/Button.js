import React from 'react';
import styles from './styles/button.module.css'

const Button = ({style, color, children, onClick, type}) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button type={type && type} style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;