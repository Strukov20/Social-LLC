import React from "react";
import {Avatar} from "./data/avatar";
import {UserInfo} from "./data/user-info";

export const Profile = () => {
    return (
        <div className="profile">
            <Avatar/>
            <UserInfo/>
        </div>
    )
}