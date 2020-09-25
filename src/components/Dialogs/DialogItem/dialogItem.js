import React from "react";
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className="dialogs__item">
            <img className="dialogs__item__img" src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" alt="UserPhoto"/>
            <NavLink  to={path}> {props.name}</NavLink>
        </div>
    )
}