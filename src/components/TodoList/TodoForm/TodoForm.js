import React, {useEffect, useState} from 'react';
import styles from './styles/todoForm.module.css'
import Button from "../../Button/Button";
import DEFAULT_TODO from "../../../constants/defaultTodo";
import ProgressType from "../../../enums/ProgressType";

/**
 * Компонение формы заметки
 * @param todos - все заметки
 * @param close - функция закрытия формы
 * @param addTodo - функция добавления заметки
 * @param add - тип формы "добавление"
 * @param edit - тип формы "редактирование"
 * @param changeTodo - функция изменения заметки
 * @param todoEdit - id выбранной заметки для редактирования
 * @returns {JSX.Element}
 * @constructor
 */
const TodoForm = ({todos, close, addTodo, add, edit, changeTodo, todoEdit}) => {
  const [todo, setTodo] = useState(todoEdit ? todos.find(el => el.id === todoEdit) : DEFAULT_TODO); // данные заметки

  useEffect(() => {
    todoEdit && setTodo(todos.find(el => el.id === todoEdit));
  }, [todoEdit, todos]);

  /**
   * Функция отправки формы
   */
  const onSubmit = () => {
    edit && changeTodo(todo);
    add && addTodo(todo);
    onClickClose();
  };

  /**
   * Функция для сохранения новых значений
   * @param event
   */
  const onChange = (event) => {
    const {value, name} = event.target;

    setTodo({
      ...todo,
      [name]: value
    });
  };

  /**
   * Функция закрытия формы
   */
  const onClickClose = () => {
    setTodo(DEFAULT_TODO);
    close instanceof Function && close();
  };

  return (
    <div className={styles.form_container}>

      <div className={styles.title}>
        {edit && "Редактирование заметки"}
        {add && "Добавление новой заметки"}
      </div>

      <form onSubmit={onSubmit}>
        <div className={styles.field_container}>
          <label htmlFor='name'>
            <div className={styles.label_text}>Наименование</div>
            <input required placeholder="Наименование заметки" autoComplete='off' id='name' value={todo.name}
                   onChange={onChange} name='name'/>
          </label>
        </div>

        <div className={styles.field_container}>
          <label htmlFor='description'>
            <div className={styles.label_text}>Описание</div>
            <input
              placeholder="Описание заметки"
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

        <div className={styles.button_container}>
          <Button type="submit" color='blue'>
            {add ? "Добавить" : edit && "Сохранить"}
          </Button>
          <Button type="button" style={{marginLeft: '7px'}} color='red' onClick={onClickClose}>
            Закрыть
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;