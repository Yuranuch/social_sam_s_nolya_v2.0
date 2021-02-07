import React from 'react';
import Users from "./Users";
import Preloader from "../assets/Preloader/Preloader";
import {getUsers} from "../api/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.pageSize,this.props.currentPage).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }
        onPageChanged = (currentPage) => {
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(currentPage)
            getUsers(this.props.pageSize,currentPage).then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleIsFetching(false)
                })
        }


    render() {
        return (
            <>
                {this.props.isFetching&&<Preloader />}
            <Users
                followedId={this.props.followedId}
                unFollowedId={this.props.unFollowedId}
                setUsers={this.props.setUsers}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                usersData = {this.props.usersData}
                onPageChanged = {this.onPageChanged}
            />
            </>
        )

    }
}

export default UsersContainer