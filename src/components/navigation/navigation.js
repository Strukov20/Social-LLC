import React from "react";

export const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__items">
                <div className="nav__item"><a href="#">Profile</a></div>
                <div className="nav__item"><a href="#">Message</a></div>
                <div className="nav__item"><a href="#">New</a></div>
                <div className="nav__item"><a href="#">Music</a></div>
                <div className="nav__item_last"><a href="#">Settings</a></div>
            </div>
        </nav>
    )
}