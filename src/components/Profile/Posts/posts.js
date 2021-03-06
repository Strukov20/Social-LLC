import React from "react";

export const Posts = (props) => {



    return (
        <div className="posts">
            <div className="posts__items">
                <div className="posts__item">
                    <img src="https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png" className="posts__img" alt="avatar"/>
                    <div className="posts__title">{props.message}</div>
                    <span className="posts__like">Like: {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}