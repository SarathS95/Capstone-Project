import React from "react";
import {Box, Container} from "@mui/material";
import NavBar from "../components/NavBar";
import PostContent from "../components/PostContent";
import { useLocation } from "react-router-dom";

function HomePage() {
    const location = useLocation();
    const user = location.state || {};
    return (
        <>
        <NavBar />

        <Box sx ={{paddingTop: '90px'}}>
            <Container maxWidth="md">
                <PostContent currentUser = {user} />
            </Container>
        </Box>
        </>
    )
}
export default HomePage;