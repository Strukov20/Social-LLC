import React from "react";

export const UserInfo = () => {
    return (
        <div className="user__data">
            <div>
                <a className="user__name" href="#">&nbsp;Bohdan Strukov</a>
            </div>
            <div className="user__title">Date of Birth:
                <a className="user__item" href="#">&nbsp;2 January</a>
            </div>
            <div className="user__title">City:
                <a className="user__item" href="#">&nbsp;Uzhorod</a>
            </div>
            <div className="user__title">Education:
                <a className="user__item" href="#">&nbsp;UzhNU</a>
            </div>
            <div className="user__title">Web-Site:
                <a className="user__item" href="#">&nbsp;https://github.com/Strukov20</a>
            </div>
        </div>
    )
}