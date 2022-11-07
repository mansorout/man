import { Button, Container, Divider, Icon, TextField, Typography } from "@mui/material";
import Header from "../Header";
import GoogleIcon from "./GoogleIcon";

const LoginWithGoogle = () => {
    return (
        <>
            <Header />
            <Container sx={{
                width: '46.25vw',
                height: '51.8vw',
                borderRadius: '1.4vw',
                border: '1px solid #3c3e42',
                padding: '5vw 8.125vw',
                margin: '7vw auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Roboto',
            }}>
                <img src='/Group 6673.svg' alt='Sprint Money Logo' style={{ width: '4.6875vw', height: '4.6875vw' }} />
                <Typography sx={{
                    fontSize: '2.5vw',
                    fontWeight: 500,
                    color: '#3c3e42',
                    marginTop: '3vw'
                }}>
                    Login with Mobile
                </Typography>
                <Typography sx={{
                    fontSize: '1.41vw',
                    lineHeight: 1.11,
                    color: '#7b7b9d',
                }}>
                    Enter your mobile number to continue
                </Typography>
                <TextField variant='outlined' label='Mobile number' required sx={{
                    width: '30vw',
                    height: '4.375vw',
                    marginTop: '2vw',
                    borderRadius: '0.3125vw',
                    boxShadow: '0 0.3125vw 0.625vw 0 rgba(0, 0, 0, 0.05)',
                    
                    backgroundColor: '#fff'
                }} />
                <Button variant="contained" sx={{
                    width: '30vw',
                    height: '3.75vw',
                    marginTop: '2vw',
                    borderRadius: '0.625vw',
                    boxShadow: '0 0.3125vw 0.625vw 0 rgba(35, 219, 123, 0.4)',
                    backgroundColor: '#23db7b',
                    fontSize: '1.25vw',
                    fontWeight: 500,
                    color: '#fff',
                    textTransform: 'capitalize'
                }}>
                    Continue with Mobile Number
                </Button>
                <Divider sx={{
                    width: '23.633vw',
                    marginTop: '2vw',
                    fontSize: '1.25vw',
                    lineHeight: 1.25,
                    color: '#7b7b9d'
                }}>OR</Divider>
                <Button variant='outlined' startIcon={<GoogleIcon sx={{ width: '2vw', height: '2vw' }} />} sx={{
                    width: '30vw',
                    height: '3.75vw',
                    marginTop: '2vw',
                    borderRadius: '0.625vw',
                    border: 'solid 0.078vw #23db7b',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    fontSize: '1.25vw',
                    fontWeight: 500,
                    color: '#23db7b',
                    textTransform: 'capitalize'
                }}>
                    Connect with Google
                </Button>
            </Container>
        </>      
    )
}; 

export default LoginWithGoogle;
