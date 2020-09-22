import React from "react";


export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__items">
                <div className="nav__item"><a href="/profile">Profile</a></div>
                <div className="nav__item"><a href="/dialogs">Dialogs</a></div>
                <div className="nav__item"><a href="/news">News</a></div>
                <div className="nav__item"><a href="/audio">Music</a></div>
                <div className="nav__item_last"><a href="/settings">Settings</a></div>
            </div>
        </nav>
    )
}