import {action, observable, computable, makeAutoObservable, makeObservable} from 'mobx';

function checkFreeNumber(arr){
    for(let i=0;i>-1;i++){
        let exist = false;
        for(let item of arr){
            if(item.id===i)
            {
                exist=true;
                break;
            }

        }
        if(!exist)
            return i;
    }
}

class TodoStore{

    todos = [
        {
            id:0,
            text:'Купить валенки'
        },
        {
            id:1,
            text:'КТО УБИЛ ОКСИ?'
        },
        {
            id:2,
            text:'МОЖЕТ ЕГО ГОРДОСТЬ?'
        },
        {
            id:3,
            text:'ИЛИ ЕГО СТРАХ, ЧТО КАЖДЫЙ ЕГО БРОСИТ???'
        },
    ];


    constructor() {
        makeObservable(this,{
            todos: observable,
            addTodo:action,
            deleteTodo:action
        });
    }

    addTodo = (text)=>{
        let new_id = checkFreeNumber(this.todos);
        const todo = {
            id:new_id,
            text:text
        };
        this.todos = [todo,...this.todos];
    }

    deleteTodo = (todo)=>{
        /*Большой вопрос к опытному. ПОЧЕМУ ЕСЛИ НЕ СТРЕЛОЧНЙО ФУНКЦИЕЙ ЗАДАНО А ОБЫЧНОЙ, ТО this.todos = undefined
        * Тоесть добавить мона, а удалить нельзя???*/
        this.todos.splice(this.todos.findIndex(x=>x.id==todo.id),1);
    }




}


export default new TodoStore();