import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.item_list}>
                <li><NavLink to='/Profile' activeClassName={styles.active}>profile</NavLink></li>
                <li><NavLink to='/Dialogs' activeClassName={styles.active}>dialogs</NavLink></li>
                <li><NavLink to='/Users' activeClassName={styles.active}>users</NavLink></li>
            </ul>
        </div>

    )

}
export default Navbar