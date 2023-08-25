import React from 'react';
import TodoItem from "./TodoItem/TodoItem";

/**
 * Компонент отображения списка всех заметок
 * @param closeTodoForm - функция закрытия формы заметок
 * @param setTodoEditVisible - функция изменения видимости формы заметки для редактирования
 * @param todos - все заметки
 * @param deleteTodo - функция удаления заметки
 * @param checkTodo - функция выбора заметки для отображения подробной информации
 * @param selectTodoIdForEdit - функция выбора заметки для редактирования
 * @returns {JSX.Element}
 * @constructor
 */
const TodoList = ({
                    closeTodoForm,
                    setTodoEditVisible,
                    todos,
                    deleteTodo,
                    checkTodo,
                    selectTodoIdForEdit,
                  }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            closeTodoForm={closeTodoForm}
            setTodoEditVisible={setTodoEditVisible}
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};

export default TodoList;