import React from 'react';
import { ItodoList } from '../Interface';

interface Props{
    todo: ItodoList;
    completeTodoList(todoListToDelete: string): void;
}

const ViewTodoList = ({todo, completeTodoList}: Props) =>{
    return(
        <div className="todoList">
            <div className="content">
                <span>{todo.todoListName}</span>
            </div>
            <button>Edit</button>
            <button onClick={() =>{completeTodoList(todo.todoListName)}}>X</button>
        </div>
    )
};

export default ViewTodoList;