import React, { useState, useEffect } from "react";
import api from '../api'

const PostForm = ({ onPostCreated, editingPost }) => {
  
    const [title, setTitle] = useState('')
    const [content, setContent ] = useState('')
    
    
    useEffect(() => {
        if(editingPost){
            setTitle(editingPost.title)
            setContent(editingPost.content)
        }
        else{
            setTitle('')
            setContent('')
        }
    }, [editingPost])

    const postForm =async (e) => {

        e.preventDefault()

        if(!title || !content){
            alert('Please fill in both fields');
            return
        }

        try{
            if(editingPost){
                await api.put(`posts/${editingPost.id}/`, { title, content });
            }
            else{
                 await api.put('posts/', {title, content})
            }
            setTitle('')
            setContent('')
            onPostCreated()
        }
        catch(err){
            console.error("Error submitting post:", err);
        }
    }

    return(
        <form onSubmit={postForm}>
            <h2>{editingPost ? 'Edit Post' : 'Create a New Post'}</h2>
            
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea 
                placeholder="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
            />
            <button type="submit">{editingPost ? 'Update' : 'Submit'}</button>
        </form>
    )
}

export default PostForm