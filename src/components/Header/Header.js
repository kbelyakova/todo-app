import React from 'react';
import styles from './styles/header.module.css'

/**
 * Компонент отображения заголовка страницы
 * @param onChange - функция для добавления новой заметки
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({onChange}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Список заметок <img onClick={onChange} className={styles.add_img} src={require('../../assets/add.png')} alt={"Добавить"}></img>
      </h1>
    </div>
  );
};

export default Header;