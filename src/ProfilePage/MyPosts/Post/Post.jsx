import React from 'react';
import styles from'./Post.module.css'
const Post = (props) => {

    return (
        <div className={styles.post}>
            <span>{props.id}</span>
            <span>{props.postText}</span>
            <span>{props.likes}</span>
        </div>

    )
}

export default Post