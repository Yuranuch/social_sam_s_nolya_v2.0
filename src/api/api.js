import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "a75b74f5-fd3f-479e-9bf1-dd4ef65ee590" }
})

export const getUsers = (pageSize, currentPage) => {
    return  instance.get(`users?count=${pageSize}&page=${currentPage}`)
}
export const followedUser = (user) => {
    return instance.delete(`follow/${user}`)
}
export const unFollowedUser = (user) => {
    return instance.post(`follow/${user}`,{})
}
export const isAuthData = () => {
    return  instance.get(`auth/me`)
}
export const getProfile = (userId) => {
    return instance.get(`profile/`+ userId)
}


