import React from 'react';
import styles from './styles/searchTodo.module.css'

const SearchTodo = ({todos, setFiltered}) => {

  const search = (value) => {
    let currentTodos = [];
    let newTodoList;

    if (value !== "") {
      currentTodos = todos;
      newTodoList = currentTodos.filter(todo => {
        const lc = todo.name.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newTodoList = todos;
    }

    setFiltered(newTodoList);
  };

  return (
    <input
      className={styles.search}
      onChange={({target: {value}}) => search(value)}
      type="text"
      placeholder="Поиск заметки"
    />
  );
};

export default SearchTodo;