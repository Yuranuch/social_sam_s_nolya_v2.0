import React from 'react';
import style from "./Users.module.css";
import User from "./User/User";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = [ ]
    for(let i=1; i<pagesCount; i++){
        pages.push(i);
    }
    return (

        <div className={style.users}>
            {pages.map(p =><span onClick={()=>{props.onPageChanged(p)}} className={props.currentPage === p && style.currentItem }>{p}</span>)}

            <h2>Users</h2>

            <User
                usersData={props.usersData}
                followedId={props.followedId}
                unFollowedId={props.unFollowedId}
            />
        </div>
    )

}
export default Users