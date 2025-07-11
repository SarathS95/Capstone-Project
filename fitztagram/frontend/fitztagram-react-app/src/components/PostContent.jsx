import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import Post from './Post';
import PostCard from './PostCard';
import axios from 'axios';

function PostContent({currentUser}) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/post')
        .then(response => {
            setPost(response.data.data);
        }).catch (error => {
            console.error('Error getting post:', error);
        });
    }, []);

    const addPost =(newPost) => {
        axios.post('http://localhost:8081/api/post/create', newPost)
        .then(response => {
            setPost(prev => [response.data.data, ...prev]);
        }).catch (error => {
            console.error('Error creating post:', error);
        });
    };

    const updatePost = (postId, updateText) => {
        axios.put(`http://localhost:8081/api/post/${postId}`, {postText: updateText})
        .then(reponse => {
            setPost(prev => prev.map(p => p.id === postId ? {...p, postText: updateText} : p));
        }).catch(err => {
            console.error("Error updating post:", err);
        })
    };

    const deletePost = (postId) => {
        axios.delete(`http://localhost:8081/api/post/${postId}`)
        .then(() => {
            setPost(prev => prev.filter(p => p.id !== postId))
        }).catch (err => {
            console.error('Error deleting post:', err)
        })
    }

    return (
        <Box sx={{width: '100%'}}>
            <Post onAddPost={addPost} currentUser={currentUser} />

            <Box sx={{mt: 3}}>
                {post.length === 0? (
                    <Typography variant="body1" color="text.secondary">No Post</Typography>
                ) : (
                    post.map((post) => (
                        <PostCard key={post.id} postId={post.id} userId={post.userId} currentUser={currentUser} username={post.user?.username ||currentUser?.username} profilePicture={post.user?.profilePicture ||""} postText={post.postText} postImage={post.postImage} onDelete={deletePost} onUpdate={updatePost} />
                    ))
                )}
            </Box>
        </Box>
    );
}

export default PostContent;