import { Avatar, Box, Button, TextField, Stack } from "@mui/material";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";

function Post({onAddPost}) {
    const [username, setUsername] = useState('');
    const [postText, setPostText] = useState('');

    const handlePostSubmit = () => {
        if (username.trim() !== "" && postText.trim() !== "") {
            onAddPost(username, postText);
            setUsername('');
            setPostText('');
    }
}
    return(
        <Box sx={{backgroundColor: 'white', padding: 3, borderRadius: 3, boxShadow: 2, mb: 3, width: '100%'}}>
            <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <TextField fullWidth placeholder="Sarath Satheesan" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" sx={{fontWeight:'bold'}} />
            </Stack>
            <Stack>
            <TextField fullWidth placeholder="What's your Post of Day?" value={postText} onChange={(e) => setPostText(e.target.value)} variant="outlined" sx={{backgroundColor: '#f0f2f5', borderRadius: 6}} />
            </Stack>

            <Stack direction= "row" justifyContent="space-around" spacing={3} sx={{mt: 3}}>
                <Button onClick={handlePostSubmit} color="primary" variant="contained">Post</Button>
                <Button startIcon={<PhotoLibraryIcon sx={{color: 'black'}}/>}>Image</Button>
                <Button startIcon={<EmojiEmotionsIcon sx={{color: 'orange'}}/>}>Mood</Button>
            </Stack>

        </Box>
    )
}
export default Post;