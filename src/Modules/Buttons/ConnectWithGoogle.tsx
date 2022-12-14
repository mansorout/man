import { useEffect } from 'react';
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import './ConnectWithGoogle.css';



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

    return  <GoogleLogin 
                className="google-button"
                clientId={ clientId }
                buttonText="Connect with Google"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={ 'single_host_origin' }
                isSignedIn={ true }
                uxMode="redirect"
                redirectUri="/account_created_with_google"
            />;
};

export default ConnectWithGoogle;
