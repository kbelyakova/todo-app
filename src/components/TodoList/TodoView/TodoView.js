import React, {useEffect, useState} from 'react';
import Button from "../../Button/Button";
import ProgressType from "../../../enums/ProgressType";
import styles from './styles/todoView.module.css';

const TodoView = ({todoId, todos, setCurrentTodo, changeTodo}) => {
  const [todo, setTodo] = useState(todoId && todos.find(el => el.id === todoId));

  useEffect(() => {
    todoId && setTodo(todos.find(el => el.id === todoId));
  }, [todoId, todos]);

  return (
    <div className={styles.container}>

      <div className={styles.todo_view_progress}
           style={{
             backgroundColor: todo.progress === ProgressType.Expects
               ? "#84878AFF"
               : todo.progress === ProgressType.InProgress
                 ? "#266fb7"
                 : todo.progress === ProgressType.Completed
                   ? "#279339FF"
                   : null
           }}
      >{todo.progress}</div>
      <div className={styles.name}>{todo.name}</div>
      <div className={styles.desc}>{todo.description}</div>

      <div className={styles.button_container}>
        {todo.progress === ProgressType.Expects &&
          <Button type="button" style={{marginLeft: '7px'}} color='blue'
                  onClick={() => changeTodo({
                    name: todo.name,
                    description: todo.description,
                    progress: ProgressType.InProgress
                  })}>
            {ProgressType.InProgress}
          </Button>}
        {todo.progress === ProgressType.InProgress &&
          <Button type="button" style={{marginLeft: '7px'}} color='green'
                  onClick={() => changeTodo({
                    name: todo.name,
                    description: todo.description,
                    progress: ProgressType.Completed
                  })}>
            {ProgressType.Completed}
          </Button>}
        <Button type="button" style={{marginLeft: '7px'}} color='red' onClick={() => setCurrentTodo(null)}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default TodoView;