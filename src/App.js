import React from 'react';
import styles from './App.module.css';
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {
    changePostTextAC,
    FollowAC, isFetchingAC,
    onAddPostAC,
    setCurrentPageAC, setProfileAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "./reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs/Dialogs";

import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./ProfilePage/ProfileContainer";
import WithUrlDataContainer from "./ProfilePage/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import AuthHeaderContainer from "./Header/HeaderContainer";

function App(props) {
    let onAddPostClick = (newPost) => {
        props.onAddPost(newPost)
    }
    let onChangePostText = (text) => {
        props.changePostText(text)
    }
    let followedId = (userId) => {
        props.followMe(userId)
    }
    let unFollowedId = (userId) => {
        props.unFollow(userId)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <AuthHeaderContainer/>
                <div className={styles.container}>
                    <Navbar/>
                    <Route path='/Profile/:userId' render={() => <WithUrlDataContainer
                        profile={props.profile}
                        newPostText={props.newPostText}
                        onChangePostText={onChangePostText}
                        onAddPostClick={onAddPostClick}
                        setProfile={props.setProfile}
                        postsData={props.postsData}/>}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Users' render={() => <UsersContainer followedId={followedId}
                                                                       unFollowedId={unFollowedId}
                                                                       isFetching={props.isFetching}
                                                                       setUsers={props.setUsers}
                                                                       totalUsersCount={props.totalUsersCount}
                                                                       pageSize={props.pageSize}
                                                                       currentPage={props.currentPage}
                                                                       setCurrentPage={props.setCurrentPage}
                                                                       setTotalUsersCount={props.setTotalUsersCount}
                                                                       toggleIsFetching={props.toggleIsFetching}
                                                                       usersData={props.usersData}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        postsData: state.postsData,
        newPostText: state.newPostText,
        usersData: state.usersData,
        totalUsersCount: state.totalUsersCount,
        pageSize: state.pageSize,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        onAddPost: (newPost) => {
            dispatch(onAddPostAC(newPost))
        },
        changePostText: (text) => {
            dispatch(changePostTextAC(text))
        },
        followMe: (userId) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (statusFetching) => {
            dispatch(isFetchingAC(statusFetching))
        },
        setProfile: (profile) => {
            dispatch(setProfileAC(profile))
        }

    }
}

const ContainerApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ContainerApp;
