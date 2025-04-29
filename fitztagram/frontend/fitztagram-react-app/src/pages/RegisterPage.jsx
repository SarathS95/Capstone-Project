import { Avatar, Grid, Paper, TextField, Typography, Button, Link } from "@mui/material";
import React, { useState } from "react";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; 
import { useNavigate } from "react-router-dom";
import  useUser  from "../hooks/useUser";


function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const navigate = useNavigate();
    const { addUser } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
        } else {
            const newUser = {
                username: `${firstName} ${lastName}`,
                email: userEmail,
                password: userPassword,
                profilePicture: ""
            };
            addUser(newUser);
            setSubmitResult('Account created successfully!');
            navigate('/');
}
    };

    const handleLogin = () => {
        navigate('/');
    };

    const paperStyle = { padding: 20, height: '85vh', width: 300, margin: '20px auto' };
    const avatarStyle = { backgroundColor: 'red' };
    const btnStyle = { margin: '10px 0' };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>Fitztagram</Typography>
                    <Typography variant="subtitle1" component="p" sx={{ color: 'gray', mb: 2 }}>Get Active & Connect with Others</Typography>
                    <Avatar style={avatarStyle}><PersonAddAltIcon /></Avatar>
                    <h2>Register</h2>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <TextField label="First Name" value={firstName} placeholder="First Name" fullWidth required margin="normal" onChange={(e) => setFirstName(e.target.value)}/>
                    <TextField label="Last Name" value={lastName} placeholder="Last Name" fullWidth required margin="normal" onChange={(e) => setLastName(e.target.value)}/>
                    <TextField label="Email Address" value={userEmail} placeholder="Enter valid email" fullWidth required margin="normal" onChange={(e) => setUserEmail(e.target.value)}/>
                    <TextField label="Password" value={userPassword} placeholder="Create Password" type="password" fullWidth required margin="normal" onChange={(e) => setUserPassword(e.target.value)}/>

                    <Button type="submit" variant="contained" style={btnStyle} fullWidth sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: '#cc0000' } }}>Register</Button>
                </form>

                <Typography sx={{ mt: 3 }}>
                    Already have an account?{' '}
                    <Link onClick={handleLogin} style={{ cursor: 'pointer' }}>Log In</Link>
                </Typography>

                <Typography variant="body2" color="success.main" align="center" sx={{ mt: 3 }}>
                    {submitResult}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default RegisterPage;
