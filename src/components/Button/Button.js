import React from 'react';
import styles from './styles/button.module.css'

const Button = ({style, color, children, onClick}) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;