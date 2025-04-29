import NavBar  from "../components/NavBar";
import { Grid } from "@mui/material";
import PostContent from "../components/PostContent";

function HomePage() {
    return (
        <>
        <NavBar />

        <Grid container spacing={2} sx={{padding:3, marginTop: '90px'}}>
            <Grid item xs={2}></Grid>
        <Grid item xs={8}>
            <PostContent />
        </Grid>
        <Grid item xs={2}></Grid>
            
        </Grid>
        </>
    )
}
export default HomePage;