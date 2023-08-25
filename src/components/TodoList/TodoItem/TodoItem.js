import React from 'react';
import Button from "../../Button/Button";
import styles from './styles/todoItem.module.css';
import ProgressType from "../../../enums/ProgressType";

/**
 * Компонент оборажения заметки в списке
 * @param closeTodoForm - функция закрытия формы заметок
 * @param setTodoEditVisible - функция изменения видимости формы заметки для редактирования
 * @param todo - данные текущей заметки
 * @param checkTodo - функция выбора заметки для отображения подробной информации
 * @param deleteTodo - функция удаления заметки
 * @param selectTodoIdForEdit - функция выбора заметки для редактирования
 * @returns {JSX.Element}
 * @constructor
 */
const TodoItem = ({
                    closeTodoForm,
                    setTodoEditVisible,
                    todo,
                    checkTodo,
                    deleteTodo,
                    selectTodoIdForEdit,
                  }) => {

  return (
    <div className={styles.container}>
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
          onClick={() => checkTodo(todo.id)}
          className={`${styles.todo_title} ${styles.text}`}
        >
          {todo.name}
        </div>
        <div aria-hidden
             onClick={() => checkTodo(todo.id)}
             className={`${styles.todo_description} ${styles.text}`}>
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