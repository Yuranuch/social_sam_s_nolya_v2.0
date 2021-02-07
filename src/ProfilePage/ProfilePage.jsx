import React from 'react';
import style from "./ProfilePage.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../assets/Preloader/Preloader";

const ProfilePage = (props) => {

    if (!props.profile)
        return <Preloader/>

    return (
        <div className={style.profile}>

            <h2>Tikhanovich Yury</h2>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={props.changePostText} value={props.newPostText}/><br/>
                <button onClick={props.addPostClick}>Add Post</button>
            </div>
            <MyPosts newPostText={props.newPostText} postsData={props.postsData}/>
        </div>
    )

}

export default ProfilePage