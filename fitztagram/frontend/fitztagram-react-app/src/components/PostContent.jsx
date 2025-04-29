import { Typography, Box } from "@mui/material";
import Post from "./Post";
import { useState } from "react";
import PostCard from "./PostCard";
import usePosts from "../hooks/usePosts";

function PostContent() {
    const {posts, addPost} = usePosts()


    return (
        <>
        <Box sx={{width: '100%'}}>
            <Post onAddPost={addPost}/>
        </Box>
            
        
        <Box sx ={{padding:3}}>
            {posts.length ===0?(
            <Typography variant="body1" sx={{color:'grey'}}>Loading</Typography>
        ) : (
            posts.map((post, index) => (
                <PostCard key={index} username={post.username} text={post.text}/>
            ))
        )
    }
        </Box>
        </>
    )
}
export default PostContent;