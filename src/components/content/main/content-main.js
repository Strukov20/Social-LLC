import React from "react";
import {Top} from "./top/top";
import {Profile} from "./profile/profile";


export const Main = () => {
    return (
        <div className="content">
            <Top/>
            <Profile/>
        </div>
    )
}