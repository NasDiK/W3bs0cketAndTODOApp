import React from 'react';
import s from './Todo.module.css';
import {observer} from "mobx-react";

const TodoElement = (props)=>{
    return(
        <div>
        <div className={s.TodoElement} onClick={()=>{
            let result = prompt('Изменить TODO', props.todo.text);
            if(result!=null)
                props.todo.text=result;
        }}>
            <p>{props.children}</p>
        </div>
        <div className={'btn btn-primary'} style={{'display':'inline-block', 'width':'8%', 'marginLeft':'2%'}} onClick={()=>{
            let confirmDelete = window.confirm(`Действительно хотите удалить дело: ${props.todo.text}`);
            if(confirmDelete) props.deleteTodo(props.todo);
        }}>X</div>
        </div>
    );
}

const Todo = (props)=>{
    return(
        <div className={s.wrapper}>
            <div className={`btn btn-primary mb-3 ${s.AddTodoButton}`} onClick={()=>{
                let result = prompt('Добавить TODO', '');
                if(result!=null) props.addTodo(result);
            }}>Добавить дело</div>
            {props.todos.map((todo,index)=><TodoElement key={index} todo={todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}>{todo.text}</TodoElement>)}
            <h5 align={'center'}>Чтобы изменить элемент щёлкните по нему:)</h5>

        <h2 align={'center'}>Предлагается ещё реализовать передвиг</h2>
        </div>
    );
};


export default observer(Todo);