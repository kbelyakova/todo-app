import React from 'react';
import styles from './styles/searchTodo.module.css'

const SearchTodo = ({search, setValueSearch, valueSearch, todos, setFiltered}) => {

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