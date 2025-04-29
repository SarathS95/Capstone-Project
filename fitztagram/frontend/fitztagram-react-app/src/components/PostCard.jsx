import { Avatar, Box, Typography, Stack } from "@mui/material";

function PostCard({ username, text }) {
return (
<Box sx={{backgroundColor: 'white', padding:4, borderRadius:5, boxShadow: 4, mb: 4, width: '100%'}}>
    <Stack direction="row" spacing={3} alignItems="center" mb={3}>
        <Avatar />
        <Typography variant="h6" sx={{fontWeight: 'bold'}}>{username}</Typography>
    </Stack>

    <Typography variant="body1">{text}</Typography>
</Box>
)
}

export default PostCard;