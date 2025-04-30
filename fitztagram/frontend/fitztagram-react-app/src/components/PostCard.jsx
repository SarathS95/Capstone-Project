import {Avatar, Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

function PostCard({username,profilePicture, postContent, postImage}) {
    return (
        <Card sx={{marginBotton: 3, boxShadow: 4,}}>
            <CardContent>
                <Stack direction="row" spacing={3} alignItems="center" mb={2}>
                    <Avatar src={profilePicture} />
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>{username}</Typography>
                </Stack>
                <Typography variant="body1" sx={{marginBotton: 3}}>{postContent}</Typography>
                {postImage && (
                    <CardMedia component="img" image={postImage} alt="Post Image" sx={{borderRadius: 2, height: 300, width: '100%', objectFit: 'cover'}} />
                )}
            </CardContent>
        </Card>
    )
}

export default PostCard;