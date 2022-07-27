import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Todo from "./Components/Todo/Todo";
import {TodoStore, ChatStore} from './Storages/MainStore'
import Chat from "./Components/Chat/Chat";
import {observer} from "mobx-react";

function App() {
    return (
        <BrowserRouter>
                <Menu/>
            <Routes>
                <Route path={'chat'} element={<Chat user={ChatStore.user} sendMessage={ChatStore.sendMessage} messages={ChatStore.messages}/>}/>
                <Route path={'todo'} element={<Todo todos={TodoStore.todos} addTodo={TodoStore.addTodo} deleteTodo={TodoStore.deleteTodo}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App);
