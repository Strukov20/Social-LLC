import React from "react";

export const AddForm = () => {
    return (

        <div className="form">
            <hr className="hr"/>
            <div className="form__title">My Posts</div>
            <div className="form__wrapper">
                <input type="text" className="form__input" placeholder="Enter your news..."/>
                <button className="form__button"><a className="" href="form">Send</a></button>
            </div>
        </div>
    )
}