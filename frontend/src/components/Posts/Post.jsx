import React from 'react'
import { useSelector } from 'react-redux'
import { APPLICATION_SETTINGS } from '../../constant';
import "./Post.css"
const Post = () => {
    const _post = useSelector(state => state.post);
    const _posts = _post.posts;
    const tags = APPLICATION_SETTINGS.tags;
    return (
        <>
            <section className="post-container">
                {_posts.slice(1).map((post, idx) => (
                    <div key={idx} className="posts">
                        <p className="posts-title">{post.title}</p>
                        <p className={`posts-tags posts-tags-${tags[post.tag]}`}>{tags[post.tag]}</p>
                        <p className="posts-description">{post.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Post