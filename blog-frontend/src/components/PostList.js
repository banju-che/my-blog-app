import React, { useEffect, useState } from 'react';
import api from '../api';
import PostForm from './PostForm';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
 
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await api.get('/posts/');
      setPosts(res.data);
    } catch (err) {
      console.error('Failed to fetch posts', err);
    }
  };

  const handlePostCreated = () => {
    fetchPosts();
    setEditingPost(null);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}/`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      console.error('Error deleting post', err);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  

  return (
    <div className='container'>
      <PostForm onPostCreated={handlePostCreated} editingPost={editingPost} />
      <h2>Recent Posts</h2>
      {posts.length === 0 ? (
        <h3>No blog posts yet</h3>
      ) : (
        posts.map((post) => (
          <div key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Posted on: {new Date(post.created_at).toLocaleString()}</small>
            <br />
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
