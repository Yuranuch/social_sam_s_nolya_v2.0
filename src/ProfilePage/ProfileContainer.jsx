import React from 'react';
import style from "./ProfilePage.module.css"
import ProfilePage from "./ProfilePage";
import {withRouter} from "react-router-dom";
import {getProfile} from "../api/api";
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        getProfile(userId)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }


    render() {
        let changePostText = (e) => {
            let newPostText = e.currentTarget.value
            this.props.onChangePostText(newPostText)
        }
        let addPostClick = () => {

            let newPostText = this.props.newPostText
            let newPost = {id: 7, postText: newPostText, likes: 5}
            this.props.onAddPostClick(newPost)
        }

        return (

            <div className={style.profile}>
                <ProfilePage {...this.props} changePostText={changePostText} addPostClick={addPostClick}/>
            </div>
        )

    }
}

let WithUrlDataContainer = withRouter(ProfileContainer)

export default WithUrlDataContainer