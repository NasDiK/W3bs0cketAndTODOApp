import React, {useRef} from 'react';
import s from './Chat.module.css';
import {observer} from "mobx-react";
import {keys} from "mobx";

const ChatElement = (props) => {
    return (
        <div className={s.chatElement}>
            [{props.data.time ?? 'unknownTime'}] {props.data.nickname ?? 'unknown'}: <span>{props.children ?? 'undefined text'}</span>
        </div>
    );
}

const Chat = (props) => {
    let name = useRef();
    let message = useRef();
    return (
        <div>
            <h2 align={'center'}>Чат</h2>
            {props.user.isLogged ?
                <div className={s.chatWrapper}>
                    <div className={s.chat}>
                        {props.messages.map((data,index) => <ChatElement key={index} data={data}>{data.message}</ChatElement>)}
                    </div>
                    <div className={`${s.chatControls} input-group mb-3`}>
                        <input type="text" className="form-control" placeholder="Write your message..." ref={message}
                               onKeyDown={(ev) => {
                                   if(ev.code=='Enter'){
                                       props.sendMessage(message.current.value);
                                       message.current.value = '';
                                   }

                               }}/>
                        <button className="input-group-text btn btn-primary" onClick={() => {
                            props.sendMessage(message.current.value);
                            message.current.value = '';
                        }}>Send
                        </button>
                    </div>
                </div>
                :
                <div className={s.wrapper}>
                    <div className={s.loginWrapper}>
                        <div className={s.enterName}>
                            <input type="text" ref={name} name="nickname" id="name" className={`form-control mb-3`}
                                   placeholder={'Enter your name...'}/>
                            <div className={`${s.enterChatButton} btn btn-primary mb-3`}
                                 onClick={() => props.user.enterName(name.current.value)}>Enter
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default observer(Chat);