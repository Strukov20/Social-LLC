import React from "react";
import {NavLink} from "react-router-dom";

export const SideBar = (props) => {

    console.log(props)

    const path = '/friends/' + props.id;

    const friendsElements = props.state.sideBar.map(src => <img className="sidebar__item__img" src={src.img} alt="Avatar"/>)

    return(
        <div className="sidebar__wrapper">
            <div className="sidebar__title">Friends:</div>
            <div className="sidebar__items">
                <div className="sidebar__item">
                    <NavLink  to={path}>
                        {friendsElements}
                    </NavLink>
                </div>

            </div>
        </div>
    )
}