import React from 'react';
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({
                    closeTodoForm,
                    setTodoEditVisible,
                    todos,
                    setTodoAddVisible,
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
            setTodoAddVisible={setTodoAddVisible}
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