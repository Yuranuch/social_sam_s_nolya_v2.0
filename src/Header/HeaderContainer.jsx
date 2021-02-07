import React from 'react';
import Header from "./Header";
import { setUsersDataAC } from "../reducer";
import {connect} from "react-redux";
import {isAuthData} from "../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        isAuthData()
            .then(response => {
                let {id, login, email} = response.data.data
                if(response.data.resultCode === 0) {
                    this.props.setUsersData(id, login, email)
                }

            })
    }

    render() {
        return (
           <Header {...this.props} />
        )

    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        login: state.login
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        setUsersData: (id, login, email) => {
            dispatch(setUsersDataAC(id, login, email))
        },

    }
}

const AuthHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
export default AuthHeaderContainer


