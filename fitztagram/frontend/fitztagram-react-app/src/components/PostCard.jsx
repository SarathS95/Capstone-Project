import {Avatar, Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

function PostCard({username,profilePicture, postText, postImage}) {
    return (
        <Card sx={{marginBottom: 3, boxShadow: 4,}}>
            <CardContent>
                <Stack direction="row" spacing={3} alignItems="center" mb={2}>
                    <Avatar src={profilePicture} />
                    <Typography variant="h6" sx={{fontWeight: 'bold', color:'black'}}>{username}</Typography>
                </Stack>
                <Typography variant="body1" sx={{marginBottom: 3}}>{postText}</Typography>
                {postImage && (
                    <CardMedia component="img" image={postImage} alt="Post Image" sx={{borderRadius: 2, maxHeight: 700, width: '100%', objectFit: 'cover', marginTop: 2}} />
                )}
            </CardContent>
        </Card>
    )
}

export default PostCard;