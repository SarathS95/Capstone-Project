import React from "react";
import {Box, Container} from "@mui/material";
import NavBar from "../components/NavBar";

function HomePage() {
    return (
        <>
        <NavBar />

        <Box sx ={{paddingTop: '90px'}}>
            <Container maxWidth="md">
                <h1>Welcome to Fitztagram</h1>
            </Container>
        </Box>
        </>
    )
}
export default HomePage;