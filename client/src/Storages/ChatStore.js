import {action, makeObservable, observable} from "mobx";
import {w3cwebsocket as W3CWebSocket} from 'websocket';

class ChatStore {

    user = {
        isLogged: false,
        nickname: '',
        enterName: (nickname) => {
            if (nickname == '') alert('Incorrect name');
            else {
                alert('Вы залогированы. Ваше имя: ' + nickname)
                this.user.isLogged = true;
                this.user.nickname = nickname;
                this.connectToSocketServer();
            }
        }
    }

    messages = []
    client = null

    constructor() {
        makeObservable(this, {
            user: observable,
            messages: observable
        });

    }

    connectToSocketServer = ()=>{
        this.client = new W3CWebSocket('ws://127.0.0.1:5000');
        this.client.onmessage = (message) => {
            this.addMessage(JSON.parse(message.data));
        };
    }

    sendMessage = (message) => {
        this.client.send(JSON.stringify({
            nickname:this.user.nickname,
            message:message,
        }));

    }

    addMessage = (data) => {
        this.messages.push({
            nickname: data.nickname,
            message: data.message,
            time: new Date().toLocaleTimeString()
        });
    }
}

export default new ChatStore();