import { Avatar, FormControlLabel, Grid, Paper, TextField, Typography, Button, Link, Checkbox } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email');
        } else {
            setSubmitResult('Successful login!');
            navigate('/home');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    const paperStyle = { padding: 20, height: '75vh', width: 300, margin: '20px auto' };
    const avatarStyle = { backgroundColor: 'red' };
    const btnStyle = { margin: '10px 0' };

    return (
        <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'red', mb: 1 }}>Fitztagram</Typography>

        <Typography variant="subtitle2" component="p" sx={{ color: 'gray', mb: 2 }}>Get Active & Connect with Others</Typography>

        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <form onSubmit ={handleSubmit}>
            <TextField label ="Email Address" value={userEmail} placeholder="Enter email address" fullWidth required margin="normal" onChange={(e) => setUserEmail(e.target.value)} />
            
            <TextField label="Password" value={userPassword} placeholder="Enter password" type="password" fullWidth required margin="normal" onChange={(e) => setUserPassword(e.target.value)} />

            <FormControlLabel control={<Checkbox name="remember" color="primary" />}
            label="Remember me" />

            <Button type = "submit" variant="contained" style={btnStyle} fullWidth sx={{backgroundColor: 'red'}}>Sign In</Button>
        </form>

        <Typography sx={{mt: 2}}>
            Forgot your password?{''}
            <Link href="#">Click here</Link>
        </Typography>

        <Typography sx={{mt: 2}}>
            Don't have an account?{''}
            <Link onClick={handleRegister} style={{cursor: 'pointer'}}>Register</Link>
        </Typography>

        <Typography variant="body2" color="error" align="center" sx={{mt: 3}}>
            {submitResult}
        </Typography>
        </Paper>
        </Grid>
        
    )
}
export default LoginPage;