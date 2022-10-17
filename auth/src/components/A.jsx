import React from 'react'

export default function A() {
    return (
        <div className="blog_post">
            <div className="img_pod">
                <img src={ } alt="random image">
            </div>
            <div className="container_copy">
                <h1>{post.title}</h1>
                <p>{post.postText}</p>
                <p><b>Author</b>: <i>{post.author.name}</i></p>
                <a className="btn_primary" onClick={() => {
                    deletePost(post.id);
                }}>Delete Post</a>
            </div>
        </div>
    )
}
