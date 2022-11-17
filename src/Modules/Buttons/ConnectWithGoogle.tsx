import { useEffect } from 'react';
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";



  const ConnectWithGoogle = () => {

    const clientId = '29162504402-fqqru7ci6ppg4cdp1urceueop1rhng6a.apps.googleusercontent.com'; 

    useEffect(() => {
        const initClient = () => {
            //@ts-ignore
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    //const responseGoogle = (response: any) => console.log(response);

    const onSuccess = (res: any) => {
        console.log('success:', res);
        console.log(res.profileObj.name);
        console.log(res.profileObj.email);
        console.log(res.profileObj.imageUrl);
    };

    const onFailure = (err: any) => console.log('failed:', err);

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "white",
            border: "1px solid #23db7b",
            boxShadow: "0 4px 8px 0 white",
            width:"100%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            marginLeft: "10px",
            color : "#23db7b"
        }
    }

    
    return  <GoogleLogin 
                clientId={ clientId }
                buttonText="Continue with Google"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={ 'single_host_origin' }
                isSignedIn={ true }
                uxMode="redirect"
                redirectUri="http://localhost:3000/account_created_with_google"
                style={ style.button }
            />;
};

export default ConnectWithGoogle;
