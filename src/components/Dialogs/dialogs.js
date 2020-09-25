import React from "react";
import {DialogItem} from "./DialogItem/dialogItem";
import {Message} from "./Message/message";

export const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map( dialog => <DialogItem  name={dialog.name} id={dialog.id}/> )

    const messagesElements = props.state.messages.map( message => <Message message={message} /> )


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