import React from 'react';
import styles from './styles/searchTodo.module.css'

/**
 * Компонент поиска заметки
 * @param search - функция поиска заметки
 * @param setValueSearch - функция изменения наименования заметки для поиска
 * @param valueSearch - наименование для поиска
 * @returns {JSX.Element}
 * @constructor
 */
const SearchTodo = ({search, setValueSearch, valueSearch}) => {

  return (
    <input
      value={valueSearch}
      className={styles.search}
      onChange={({target: {value}}) => {
        search(value);
        setValueSearch(value);
      }}
      type="text"
      placeholder="Поиск заметки"
    />
  );
};

export default SearchTodo;