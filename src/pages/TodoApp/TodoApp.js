import React, {useEffect, useState} from 'react';
import DEFAULT_TODO_LIST from "../../constants/defaultTodoList";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoList/TodoForm/TodoForm";
import Header from "../../components/Header/Header";
import styles from "./styles/todoApp.module.css"
import SearchTodo from "../../components/Search/SearchTodo";
import TodoView from "../../components/TodoList/TodoView/TodoView";

const TodoApp = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [filtered, setFiltered] = useState([]);
  const [todoIdForEdit, setTodoIdForEdit] = useState(null);
  const [todoEditVisible, setTodoEditVisible] = useState(false);
  const [todoAddVisible, setTodoAddVisible] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    setFiltered(todos);
    valueSearch && search(valueSearch);
  }, [todos]);

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

  const selectTodoIdForEdit = (id) => {
    setCurrentTodo(null);
    setTodoIdForEdit(id);
  };

  const deleteTodo = (id) => {
    setCurrentTodo(null);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodoAddVisible(false);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
    setCurrentTodo(id);
  };

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

  const changeAdd = () => {
    setCurrentTodo(null);
    setTodoAddVisible(true);
    setTodoIdForEdit(null);
    setTodoEditVisible(false);
  }

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
              <SearchTodo search={search} setValueSearch={setValueSearch} valueSearch={valueSearch} todos={todos}
                          setFiltered={setFiltered}/>
            </div>
            <div className={styles.vertical_scroll}>
              <TodoList
                closeTodoForm={() => setTodoAddVisible(false)}
                setTodoEditVisible={setTodoEditVisible}
                setTodoAddVisible={setTodoAddVisible}
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