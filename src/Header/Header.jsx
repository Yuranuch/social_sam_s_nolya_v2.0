import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={style.header}>
            <img src='https://xn--80aed5aobb1a.xn--p1ai/wp-content/uploads/bmw-logo-2020-grey.png' alt="logo" />
            <div>
                {props.isAuth? <span>{props.login}</span>:<NavLink to='/loginPage'>Login</NavLink>}
            </div>
        </div>
    )

}
export default Header