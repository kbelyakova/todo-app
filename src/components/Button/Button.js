import React from 'react';
import styles from './styles/button.module.css'

/**
 * Компонент отображения кнопки
 * @param style - стили для кнопки
 * @param color - цвет
 * @param children - содержимое кнопки
 * @param onClick - функция, которая срабатывает при нажатии на кнопку
 * @param type - тип кнопки
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({style, color, children, onClick, type}) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button type={type && type} style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;