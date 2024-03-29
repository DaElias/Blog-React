import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../data/Post'


const Blog = () => {
    return (<div>
        <h2>Blog</h2>
        <ul>
            {Post.map((post) => {
                return (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                    </li>
                )
            })}
        </ul>
    </div >)
};

export default Blog;