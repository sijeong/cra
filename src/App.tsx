import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, loadTodos } from './actions/todoActions';
import './App.css';
import { ApiStatus, TodoItem } from './models';
import { State } from './reducers';

function App() {

  const [desc, setDesc] = useState('');
  const todos = useSelector<State, TodoItem[]>(state => state.todos.todos);
  const loadingStatus = useSelector<State, ApiStatus>(state => state.todos.loadingStatus);
  const dispath = useDispatch();


  useEffect(() => {
    dispath(loadTodos());
  }, []);

  const addNewTodo = () => {
    dispath(addTodo(desc))
  }

  const onDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  }
  return (

      <div className="App">
      <div>
        <input placeholder="Enter todo message" onChange={onDescChange} value={desc}></input>
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
