const ON_ADD_POST = "ON_ADD_POST"
const ON_CHANGE_POST_TEXT = "ON_CHANGE_POST_TEXT"
const ON_UNFOLLOW = "ON_UNFOLLOW"
const ON_FOLLOW = "ON_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_FETCHING = "IS_FETCHING"
const SET_PROFILE = "SET_PROFILE"
const SET_USERS_DATA = "SET_USERS_DATA"


const initialState = {
    postsData : [
        {id: 0, postText: 'Hello', likes: 5},
        {id: 1, postText: 'Hi', likes: 5},
        {id: 2, postText: 'How are you?', likes: 5},
        {id: 3, postText: 'How are you?', likes: 7},
    ],
    usersData : [
    ],
    newPostText: "",
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    profile: null,

    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const reducer = (state=initialState, action) => {
    switch (action.type){

        case ON_ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, action.post]
            }
        case ON_CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case ON_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id===action.userId){
                        return {...u, follow: false}
                    }
                        return u
                })
            }
        case ON_UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id===action.userId){
                        return {
                            ...u, follow: true
                        }
                    }return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.statusFetching
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USERS_DATA:
            debugger
            return {

                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: true
            }


    }
    return state;
}
export const onAddPostAC =(newPost)=> ({type: ON_ADD_POST, post:newPost})
export const changePostTextAC =(text)=> ({type: ON_CHANGE_POST_TEXT, newPostText:text})
export const FollowAC = (userId) => ({type:ON_FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type:ON_UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type:SET_USERS, users: users})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount:totalCount})
export const isFetchingAC = (statusFetching) => ({type: IS_FETCHING, statusFetching:statusFetching})
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile:profile})
export const setUsersDataAC = (id, login, email) => ({type: SET_USERS_DATA, id: id, login:login, email:email})




export default reducer

