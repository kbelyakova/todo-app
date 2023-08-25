import React from 'react';
import styles from './styles/header.module.css'

const Header = ({onChange}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Список задач <img onClick={onChange} className={styles.add_img} src={require('../../assets/add.png')} alt={"Добавить"}></img>
      </h1>
    </div>
  );
};

export default Header;