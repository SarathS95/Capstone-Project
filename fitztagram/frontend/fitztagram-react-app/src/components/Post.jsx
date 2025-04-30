import {Avatar, Box, Button, Stack, TextField} from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmoticonsIcon from '@mui/icons-material/EmojiEmotions';
import {useState} from "react";

function Post({onAddPost}) {
    const [postText, setPostText] = useState('');

    const handlePost = () => {
        if (postText.trim() === "")return;

        const newPost = {
            postContent: postText,
            postImage: "",
        }
    };

    return(
        <Box sx={{backgroundColor: 'white', padding: 3, borderRadius: 3, boxShadow: 3, mb: 3}}>
            <Stack direction= "row" spacing={2} alignItems="center" mb={2}>
                <Avatar />
                <TextField fullWidth placeholder="What is your post of the day?" variant="outlined" value={postText} onChange= {(e) => setPostText(e.target.value)} sx={{backgroundColor: '#f0f2f5', borderRadius: 5}} />
            </Stack>

            <Stack direction="row" justifyContent="space-around" spacing={3}>
                <Button startIcon={<VideoCallIcon sx={{color: 'red'}} />}>Post Video</Button>
                <Button startIcon={<PhotoLibraryIcon sx={{color: 'red'}} />}>Post Image</Button>
                <Button startIcon={<EmojiEmoticonsIcon sx={{color: 'orange'}} />}>Feelings</Button>
            </Stack>

            <Box sx = {{display: 'flex', justifyContent: 'center', mt: 2}}>
                <Button variant= "contained" color="primary" onClick={handlePost}>Post</Button>
            </Box>
        </Box>
    )
}

export default Post;