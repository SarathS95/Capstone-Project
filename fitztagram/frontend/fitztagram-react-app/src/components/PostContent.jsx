import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import Post from './Post';
import PostCard from './PostCard';
import axios from 'axios';

function PostContent() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/post')
        .then(response => {
            setPost(response.data.data);
        }).catch (error => {
            console.error('Error getting post:', error);
        });
    }, []);

    return (
        <Box sx={{width: '100%'}}>
            <Post />

            <Box sx={{mt: 3}}>
                {post.length === 0? (
                    <Typography variant="body1" color="text.secondry">No Post</Typography>
                ) : (
                    post.map((post) => (
                        <PostCard key={post.id} username={`User ${post.userId}`} postText={post.postText} postImage={post.postImage} />
                    ))
                )}
            </Box>
        </Box>
    );
}

export default PostContent;