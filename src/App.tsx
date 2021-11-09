import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import ViewTodoList from './Component/ViewTodoList';
import {ItodoList} from './Interface';

const App: FC = () => {
  /*Untuk vairable input agar bisa di input */
  const [todoName, setTodoName] = useState<string>("");
  /*Untuk melihat hasil inputan */
  const [todoNameList, viewTodoNameList] = useState<ItodoList[]>([]);

  const input_todo_task = (event: ChangeEvent<HTMLInputElement>): void =>{
    setTodoName(event.target.value);
  };

  const addTodoList = (): void =>{
    const newTodo = {todoListName: todoName};
    viewTodoNameList([...todoNameList, newTodo]);
    setTodoName("");
  }

  return (
    <div className="App">
      <div className="Todo_List_Input">
        <input type="text" placeholder="Insert your task here" value={todoName} onChange={input_todo_task}/>
        <button onClick={addTodoList}>Add</button>
      </div>
      <div className="Todo_List">
        {todoNameList.map((todo: ItodoList, key: number) =>{
          return <ViewTodoList key={key} todo={todo}/>
        })}
      </div>
    </div>
  );
}

export default App;
