import {Avatar, Box, Card, CardContent, CardMedia, Stack, Typography, Button, TextField} from "@mui/material";
import {useState} from "react";

function PostCard({postId, userId,currentUser,username,profilePicture, postText, postImage, onDelete, onUpdate}) {
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(postText)

    const handleDelete = () => {
        onDelete(postId)
    }

    const handleEdit =() => {
        setEdit(true)
    }
    const handleSave =() => {
        onUpdate(postId, editText)
        setEdit(false)
    }

    const isUser = currentUser?.id === userId

    return (
        <Card sx={{marginBottom: 3, boxShadow: 4,}}>
            <CardContent>
                <Stack direction="row" spacing={3} alignItems="center" mb={2}>
                    <Avatar src={profilePicture} />
                    <Typography variant="h6" sx={{fontWeight: 'bold', color:'black'}}>{username}</Typography>
                </Stack>

                {edit ? (
          <TextField fullWidth multiline rows={2} value={editText} onChange={(e) => setEditText(e.target.value)} sx={{ marginBottom: 2 }}/>
                ) : (
                    <Typography variant="body1" sx={{marginBottom: 3}}>{postText}</Typography>
                )}
                {postImage && (
                    <CardMedia component="img" image={postImage} alt="Post Image" sx={{borderRadius: 2, maxHeight: 700, width: '100%', objectFit: 'cover', marginTop: 2}} />
                )}

                {isUser && (
                    <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        {edit ? (
                            <Button variant="contained" size="small" onClick={handleSave}>Save</Button>
                        ) : (
                            <Button variant="outlined" size="small" onClick={handleEdit}>Edit</Button>
            )}
                            <Button variant="outlined" size="small" color="error" onClick={handleDelete}>Delete</Button>
                    </Box>
                )}
         </CardContent>
        </Card>
    )
}

export default PostCard;