import React from "react";
import {Box, Container} from "@mui/material";
import NavBar from "../components/NavBar";
import PostContent from "../components/PostContent";

function HomePage() {
    return (
        <>
        <NavBar />

        <Box sx ={{paddingTop: '90px'}}>
            <Container maxWidth="md">
                <PostContent />
            </Container>
        </Box>
        </>
    )
}
export default HomePage;