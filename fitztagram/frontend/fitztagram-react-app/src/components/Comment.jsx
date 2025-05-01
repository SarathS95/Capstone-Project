import {Box, Button, Stack, TextField, Typography, Avatar} from "@mui/material";
import {useState, useEffect} from "react"
import axios from "axios"

function Comment({postId, currentUser}) {
    const [comment, setComment] = useState([])
    const [commentText, setCommentText] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8081/api/comment/post/${postId}`)
        .then(res => setComment(res.data.data))
        .catch(err => console.error("Error getting comment:", err))
    }, [postId])

    const handleSubmit =() => {
        if(!currentUser || commentText.trim() === "") return;

        const commentData = {
            userId: currentUser.id,
            postId: postId,
            commentText: commentText
        }

        axios.post("http://localhost:8081/api/comment/create", commentData)
        .then(res => {
            setComment(prev => [...prev, res.data.data]);
            setCommentText("")
        }).catch (err => console.error("error posting comment:", err))
    }

    return(
        <Box sx={{mt:2}}>
            <Typography variant="subtitle1" sx={{mb :1}}>Comments</Typography>

            {comment.map(comment => (
                <Stack direction="row" spacing={2} alignItems="center" key={comment.id} sx={{mb:1}}>
                    <Avatar src={comment.user?.profilePicture} />

                    <Box>
                        <Typography variant="body2" fontWeight="bold">
                            {comment.user?.username}
                        </Typography>
                        <Typography variant="body2">{comment.commentText}</Typography>
                    </Box>
                </Stack>
            ))}
            {currentUser && (
                <Stack direction="row" spacing={2} mt={2}>
                    <TextField fullWidth placeholder="Add comment" value={commentText} onChange={e => setCommentText(e.target.value)} />
                        <Button variant="contained" onClick={handleSubmit}>Comment</Button>
                </Stack>
            )}
        </Box>
    )
}

export default Comment;