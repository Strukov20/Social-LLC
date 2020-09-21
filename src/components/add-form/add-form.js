import React from "react";

export const AddForm = () => {
    return (
        <div className="form__add">
            <div className="form__wrapper">My Posts</div>
            <input type="text" className="form__input" placeholder="Enter your news..."/>
            <button className="form__button">Send</button>
        </div>
    )
}