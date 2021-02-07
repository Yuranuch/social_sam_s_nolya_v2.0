import React from 'react';
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followedUser, unFollowedUser} from "../../api/api";


class User extends React.Component {
    onUnfollowed = (userId) => {
        this.props.unFollowedId(userId)
    }
    onFollowed = (userId) => {
        this.props.followedId(userId)
    }
    render() {


        return (<div>
                {this.props.usersData.map(u => <div key={u.id} className={style.user}>
                    <div className={style.avatar}>
                        <NavLink to={'/Profile/'+u.id}><img src={u.photos.small != null ? u.photos.small : "https://iceshot.by/media/noavatar.png"}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div className={style.name}>
                        {u.name}
                    </div>
                    <div className={style.location}>
                        <span>location:</span> {u.location}
                    </div>
                    <div>
                        {u.follow === true ?
                            <button onClick={() => {
                            followedUser(u.id)

                                    .then(response => {
                                        this.onFollowed(u.id)
                                    })

                            }}>unfollow</button> :
                            <button onClick={() => {
                                unFollowedUser(u.id)
                                    .then(response => {
                                        this.onUnfollowed(u.id)
                                    })

                            }}>follow</button>}
                    </div>

                </div>)}

            </div>

        )

    }
}

export default User