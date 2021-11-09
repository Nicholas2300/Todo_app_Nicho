import React from 'react';
import { ItodoList } from '../Interface';

interface Props{
    todo: ItodoList;
}

const ViewTodoList = ({todo}: Props) =>{
    return(
        <div>
            {todo.todoListName}
        </div>
    )
};

export default ViewTodoList;