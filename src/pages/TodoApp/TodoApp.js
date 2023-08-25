import React, {useEffect, useState} from 'react';
import DEFAULT_TODO_LIST from "../../constants/defaultTodoList";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoList/TodoForm/TodoForm";
import Header from "../../components/Header/Header";
import styles from "./styles/todoApp.module.css"
import SearchTodo from "../../components/Search/SearchTodo";
import TodoView from "../../components/TodoList/TodoView/TodoView";

/**
 * Компонент, отображающий страницу с заметками
 * @returns {JSX.Element}
 * @constructor
 */
const TodoApp = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST); // все заметки
  const [filtered, setFiltered] = useState([]); // отфильтраванные заметки
  const [todoIdForEdit, setTodoIdForEdit] = useState(null); // id заметки для редактирования
  const [todoEditVisible, setTodoEditVisible] = useState(false); // видимость формы редактирования заметки
  const [todoAddVisible, setTodoAddVisible] = useState(false); // видимость формы добавления новой заметки
  const [valueSearch, setValueSearch] = useState(''); // наименование заметки для поиска
  const [currentTodo, setCurrentTodo] = useState(null); // id выбранной заметки

  useEffect(() => {
    setFiltered(todos);
    valueSearch && search(valueSearch);
  }, [todos]);

  /**
   * Функция поиска заметки по её наименованию
   * @param value - наименование заметки, которое вводит пользователь для поиска
   */
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

  /**
   * Функция добавления новой заметки
   * @param name - наименование
   * @param description - описание
   * @param progress - прогресс выполнения заметки
   */
  const addTodo = ({name, description, progress}) => {
    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        name,
        description,
        progress,
      }
    ]);
  };

  /**
   * Функция выбора заметки для редактирования
   * @param id - индекс выбранной заметки
   */
  const selectTodoIdForEdit = (id) => {
    setCurrentTodo(null);
    setTodoIdForEdit(id);
  };

  /**
   * Функция удаления заметки
   * @param id - индекс заметки
   */
  const deleteTodo = (id) => {
    setCurrentTodo(null);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Функция выбора заметки для просмотра
   * @param id - индекс заметки
   */
  const checkTodo = (id) => {
    setTodoAddVisible(false);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
    setCurrentTodo(id);
  };

  /**
   * Функция изменения заметки
   * @param name - наименование
   * @param description - описание
   * @param progress - прогресс
   */
  const changeTodo = ({name, description, progress}) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit || todo.id === currentTodo) {
          return {...todo, name, description, progress};
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  /**
   * Функция для отображения формы добавления новой заметки
   */
  const changeAdd = () => {
    setCurrentTodo(null);
    setTodoAddVisible(true);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
  }

  /**
   * Функция для закрытия формы заметки
   */
  const closeTodoForm = () => {
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
    setTodoAddVisible(false);
  }

  return (
    <div className={styles.container_page}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.list}>
            <div style={{width: '100%'}}>
              <Header onChange={changeAdd}/>
              <SearchTodo search={search} setValueSearch={setValueSearch} valueSearch={valueSearch}/>
            </div>
            <div className={styles.vertical_scroll}>
              <TodoList
                closeTodoForm={() => setTodoAddVisible(false)}
                setTodoEditVisible={setTodoEditVisible}
                todoIdForEdit={todoIdForEdit}
                todos={filtered}
                deleteTodo={deleteTodo}
                checkTodo={checkTodo}
                selectTodoIdForEdit={selectTodoIdForEdit}
                changeTodo={changeTodo}
              />
            </div>
          </div>
          <div className={styles.todo_form}>
            {currentTodo &&
              <TodoView changeTodo={changeTodo} setCurrentTodo={setCurrentTodo} todoId={currentTodo} todos={todos}/>}
            {todoAddVisible && <TodoForm close={closeTodoForm} add addTodo={addTodo} changeTodo={changeTodo}/>}
            {todoEditVisible &&
              <TodoForm close={closeTodoForm} todos={todos} todoEdit={todoIdForEdit} edit changeTodo={changeTodo}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;