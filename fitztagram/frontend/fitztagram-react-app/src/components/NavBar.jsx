import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
    return (
        <AppBar position="fixed" sx={{backgroundColor: '#f5f5f5', color: 'black'}} elevation={2}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
                <Typography variant="h6" sx={{color:'red', fontWeight: 'bold'}}>Fitztagram</Typography>

                <Box sx={{display:'flex', gap:3}}>
                    <IconButton sx={{color:'red'}}><HomeIcon /></IconButton>
                    <IconButton sx={{color:'red'}}><GroupAddIcon /></IconButton>
                    <IconButton sx={{color:'red'}}><PersonSearchIcon /></IconButton>
                    <IconButton sx={{color:'red'}}><GroupsIcon /></IconButton>
                    <IconButton sx={{color:'red'}}><MessageIcon /></IconButton>
                </Box>
                
                <Box sx={{display:'flex', gap:3}}>
                <IconButton sx={{color:'red'}}><SettingsIcon /></IconButton>
                <IconButton sx={{color:'red'}}><NotificationsIcon /></IconButton>
                <IconButton sx={{color:'red'}}><AccountCircleIcon /></IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;