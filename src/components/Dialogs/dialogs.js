import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className="dialogs__item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="dialogs__mess-item">{props.message}</div>
    )
}


export const Dialogs = (props) => {

    let dialogs = [
        { id: "1", name: 'Buriy Alex' },
        { id: "2", name: 'Strukov Bohdan' },
        { id: "3", name: 'Halas Vlad' },
        { id: "4", name: 'Chykut Vasyl'},
        { id: "5", name: 'Varga Olena' },
        { id: "6", name: 'Reddy Oksi' },
        { id: "7", name: 'Badrub Sanya' },
        { id: "7", name: 'Kolos Andy' }
    ]

    let messages = [
        { id: "1", message: 'Hi, how are you?' },
        { id: "2", message: 'Hi, what are you doing?' },
        { id: "3", message: 'Hi, how are you?' },
        { id: "4", message: 'Hi, what are you doing?' },
        { id: "5", message: 'Hi, how are you?' },
        { id: "6", message: 'Hi, what are you doing?' },
        { id: "7", message: 'Hi, how are you?' }
    ]

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )

    let messagesElements = messages.map( message => <Message message={message.message}/> )


    return (
        <div className="dialogs">
            <div className="dialogs__wrapper">
                <div className="dialogs__items">
                    {dialogsElements}
                </div>
                <div className="vertical-line"></div>
                <div className="dialogs__mess-items">
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}