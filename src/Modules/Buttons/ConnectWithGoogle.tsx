
import { useEffect } from 'react';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleLogo } from "../../Assets";
import { GoogleLogin } from "react-google-login";
import { gapi, loadClientAuth2 } from "gapi-script";
import { GoogleLoginButton } from 'ts-react-google-login-component';


  const ConnectWithGoogle = () => {

    const clientId = '29162504402-fqqru7ci6ppg4cdp1urceueop1rhng6a.apps.googleusercontent.com';
/*
    const navigate = useNavigate();

    const preLoginTracking = (): void => {
        console.log('Attemp to login with google');
    }

    const errorHandler = (error: string): void => {
        // handle error if login got failed...
        console.error(error)
    }

    const responseGoogle = (googleUser: gapi.auth2.GoogleUser): void => {
        const id_token = googleUser.getAuthResponse(true).id_token
        const googleId = googleUser.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})
        // Make user login in your system
        // login success tracking...
    }

    useEffect(() => {
        let gapiClient = loadClientAuth2(gapi, clientId, '');
    });
*/
    const onSuccess = (res: any) => {
        console.log('success:', res);
        //navigate("/account_created_with_google");
    };

    const onFailure = (err: any) => console.log('failed:', err);
/*
    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "white",
            border: "1px solid #23db7b",
            boxShadow: "0 4px 8px 0 white",
            width:"90%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            marginLeft: "10px",
            color : "#23db7b"
        }
    }
*/
    
    return  <GoogleLogin 
                clientId={ clientId }
                buttonText="Continue with Google"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={ 'single_host_origin' }
                isSignedIn={ true }
                redirectUri="http://localhost:3000/account_created_with_google"
            />;
    
    
};

export default ConnectWithGoogle;
