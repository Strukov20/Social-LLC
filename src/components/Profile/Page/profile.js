import React from "react";

import {ProfileInfo} from "./profileInfo";
import {AddForm} from "../Posts/Add-form/add-form";
import {Posts} from "../Posts/posts";

export const Profile = (props) => {



    let postsElement = props.state.posts.map( post => <Posts message={post.message} likesCount = {post.likesCount} />)

    return (
        <div className="content-wrapper">
            <div className="content">
                <ProfileInfo/>
                <AddForm/>
                {postsElement}
            </div>
        </div>
    )
}