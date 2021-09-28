
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import data from './components/data.json';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState(data)
    return (
    <div>
      <Header/>
      <TodoList todolists = {todoList}/>
    </div>
  );
}

export default App;