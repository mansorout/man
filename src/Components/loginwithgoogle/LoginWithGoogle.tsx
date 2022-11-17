// import { IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
// import  { GoogleLogin } from 'react-google-login';

const clientID = "796743669890-hf5d5lfuo2pcb5j445rv2vcv84m7it9v.apps.googleusercontent.com";

export default function LoginWithGoogle(props: any) {

    // const onLoginSuccess = (res: any) => {
    //     props.getProfile(res.profileObj)
    // }

    // const onLoginFail = (res: any) => {
    //     console.log("Login Failed", res)
    // }

    function handleCallBackResponse(res: any) {
        const userProfile = jwt_decode(res.credential);
        props.getProfile(userProfile);
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        document.body.appendChild(script);
        // @ts-ignore
        google?.accounts?.id.initialize({
            client_id: '1063462006546-b759lhemgrrtqko6rqn947ltn3e4jnn1.apps.googleusercontent.com',
            callback: handleCallBackResponse,
            auto_select: false
        });
        // @ts-ignore
        google?.accounts?.id.renderButton(
            document.getElementById('login'),
            {
                theme: 'outline',
                size: 'large',
                type: 'icon',
                shape: 'circle'
            }
        );
        // @ts-ignore
        google.accounts.id.cancel();
    }, []);

    return (
        <div id={"login"} style={{
            marginTop: '10px'
        }}>
            {/* @ts-ignore */}
            {/* <GoogleLogin
                clientId={clientID}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFail}
                // cookiePolicy={'single_host_origin'}
                render={(renderProps: any) => (
                    <IconButton 
                        onClick={renderProps.onClick}
                        // disabled={renderProps.disabled}
                    >
                        <img src={require('../../blocks/email-account-registration/assets/google.png')} height={35} />
                    </IconButton>
                )}
                autoLoad={false}
            /> */}
        </div>
    )
}


