import React from "react";

import {Profile} from "./profile";
import {AddForm} from "../Add-form/add-form";
import {Posts} from "../Posts/posts";

export const Content = () => {

    let posts = [
        { id: "1", message: 'Hi, how are you?', likesCount: '23'},
        { id: "2", message: 'It`s our new program! Hey!', likesCount: '43'},
        { id: "3", message: 'Hi, good job!', likesCount: '53'},
        { id: "4", message: 'Hey, why nobody love me?', likesCount: '13'}

    ]

    let postsElement = posts.map( post => <Posts message={post.message} likesCount = {post.likesCount} />)

    return (
        <div className="content-wrapper">
            <div className="content">
                {/*<div className="top__wrapper">*/}
                {/*    <img src="https://ecooboi.com.ua/files/cache/e9/25/4f/ecooboi-abstrakciya-yarkie-cveta-1555853972.jpg" className="top__img" alt="content-top"/>*/}
                {/*</div>*/}
                <Profile/>
                <AddForm/>
                {postsElement}
            </div>
        </div>
    )
}