import React, {useEffect, useState} from 'react';
import styles from './styles/todoForm.module.css'
import Button from "../../Button/Button";
import DEFAULT_TODO from "../../../constants/defaultTodo";
import ProgressType from "../../../enums/ProgressType";

const TodoForm = ({todos, close, addTodo, add, edit, changeTodo, todoEdit}) => {
  const [todo, setTodo] = useState(todoEdit ? todos.find(el => el.id === todoEdit) : DEFAULT_TODO);

  useEffect(() => {
    todoEdit && setTodo(todos.find(el => el.id === todoEdit));
  }, [todoEdit, todos]);

  const onClick = () => {
    edit && changeTodo(todo);
    add && addTodo(todo);
    onClickClose();
  };

  const onChange = (event) => {
    const {value, name} = event.target;

    setTodo({
      ...todo,
      [name]: value
    });
  };

  const onClickClose = () => {
    setTodo(DEFAULT_TODO);
    close instanceof Function && close();
  };

  return (
    <div className={styles.form_container}>

      <div className={styles.title}>
        {edit && "Редактирование задачи"}
        {add && "Добавление новой задачи"}
      </div>

      <div>
        <div className={styles.field_container}>
          <label htmlFor='name'>
            <div className={styles.label_text}>Наименование</div>
            <input required placeholder="Наименование задачи" autoComplete='off' id='name' value={todo.name}
                   onChange={onChange} name='name'/>
          </label>
        </div>

        <div className={styles.field_container}>
          <label htmlFor='description'>
            <div className={styles.label_text}>Описание</div>
            <input
              placeholder="Описание задачи"
              autoComplete='off'
              id='description'
              value={todo.description}
              onChange={onChange}
              name='description'
            />
          </label>
        </div>

        <div className={styles.field_container}>
          <label htmlFor='progress'>
            <div className={styles.label_text}>Прогресс выполнения заметки</div>
            <select value={todo.progress} onChange={onChange} name="progress">
              <option value={ProgressType.Expects}>{ProgressType.Expects}</option>
              <option value={ProgressType.InProgress}>{ProgressType.InProgress}</option>
              <option value={ProgressType.Completed}>{ProgressType.Completed}</option>
            </select>
          </label>
        </div>
      </div>

      <div className={styles.button_container}>
        {add && <Button color='blue' onClick={onClick}>
          Добавить
        </Button>}
        {edit && (
          <Button color='blue' onClick={onClick}>
            Сохранить
          </Button>
        )}
        <Button style={{marginLeft: '7px'}} color='red' onClick={onClickClose}>
          Закрыть
        </Button>
      </div>

    </div>
  );
};

export default TodoForm;