import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import ViewTodoList from './Component/ViewTodoList';
import {ItodoList} from './Interface';

const App: FC = () => {
  /*Untuk vairable input agar bisa di input */
  const [todoName, setTodoName] = useState<string>("");
  /*Untuk melihat hasil inputan */
  const [todoNameList, setTodoNameList] = useState<ItodoList[]>([]);

  const inputTodoTask = (event: ChangeEvent<HTMLInputElement>): void =>{
    setTodoName(event.target.value);
  };

  const addTodoList = (): void =>{
    const newTodo = {todoListName: todoName};
    setTodoNameList([...todoNameList, newTodo]);
    setTodoName("");
  };

  const completeTodoList = (todoListToDelete: string): void =>{
    setTodoNameList(todoNameList.filter((todo) =>{
      return todo.todoListName !== todoListToDelete
    }))
  };

  return (
    <div className="App">
      <div className="TodoListInput">
        <input type="text" placeholder="Insert your task here" value={todoName} onChange={inputTodoTask}/>
        <button onClick={addTodoList}>Add</button>
      </div>
      <div className="TodoList">
        {todoNameList.map((todo: ItodoList, key: number) =>{
          return <ViewTodoList key={key} todo={todo} completeTodoList={completeTodoList}/>
        })}
      </div>
    </div>
  );
}

export default App;
