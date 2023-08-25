import React from 'react';
import Button from "../../Button/Button";
import styles from './styles/todoItem.module.css';
import ProgressType from "../../../enums/ProgressType";

const TodoItem = ({
                    closeTodoForm,
                    setTodoEditVisible,
                    todo,
                    checkTodo,
                    deleteTodo,
                    selectTodoIdForEdit,
                  }) => {

  return (
    <div className={styles.container} style={{opacity: todo.checked ? 0.8 : 1}}>
      <div>
        <div className={styles.progress} style={{
          backgroundColor: todo.progress === ProgressType.Expects
            ? "#84878AFF"
            : todo.progress === ProgressType.InProgress
              ? "#266fb7"
              : todo.progress === ProgressType.Completed
                ? "#279339FF"
                : null
        }}>
          {todo.progress}
        </div>
        <div
          aria-hidden
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          onClick={() => checkTodo(todo.id)}
          className={styles.todo_title}
        >
          {todo.name}
        </div>
        <div aria-hidden
             style={{
               whiteSpace: 'nowrap',
               overflow: 'hidden',
               textOverflow: 'ellipsis',
             }}
             onClick={() => checkTodo(todo.id)}
             className={styles.todo_description}>
          {todo.description}
        </div>
      </div>
      <div className={styles.button_container}>
        <Button color='blue'
                onClick={() => {
                  closeTodoForm instanceof Function && closeTodoForm();
                  selectTodoIdForEdit(todo.id);
                  setTodoEditVisible(true);
                }}
        >
          Редактировать
        </Button>
        <Button color='red'
                onClick={() => deleteTodo(todo.id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;