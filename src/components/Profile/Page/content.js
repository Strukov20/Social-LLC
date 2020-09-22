import React from "react";

import {Profile} from "./profile";
import {AddForm} from "../Add-form/add-form";
import {Posts} from "../Posts/posts";

export const Content = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                {/*<div className="top__wrapper">*/}
                {/*    <img src="https://ecooboi.com.ua/files/cache/e9/25/4f/ecooboi-abstrakciya-yarkie-cveta-1555853972.jpg" className="top__img" alt="content-top"/>*/}
                {/*</div>*/}
                <Profile/>
                <AddForm/>
                <Posts message="Hey, why nobody love me?" likesCount = "0" />
                <Posts message="It`s our new program! Hey!" likesCount = "23" />
            </div>
        </div>
    )
}