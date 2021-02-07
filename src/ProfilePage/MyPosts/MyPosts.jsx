import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostsData = props.postsData.map(p =><Post id={p.id} postText={p.postText} likes={p.likes} />)

    return (
            <div>
                <h4>Posts List</h4>
                {newPostsData}
            </div>
    )
}

export default MyPosts