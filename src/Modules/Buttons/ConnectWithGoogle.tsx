import { useEffect } from 'react';
import { GoogleLogin } from "react-google-login";
import siteConfig from '../../Utils/siteConfig';
import './ConnectWithGoogle.css';
import { gapi } from "gapi-script";
// const gapi: any = require("gapi-script");


const ConnectWithGoogle = () => {

  useEffect(() => {
    gapi?.load('client:auth2', initClient);
  }, []);

  const initClient = () => {
    // @ts-ignore
    gapi?.client?.init({
      clientId: siteConfig.GOOGLE_OAUTH_CLIENT_ID,
      scope: ''
    });
  };

  const onSuccess = (res: any) => {
    console.log('success:', res);
  };

  const onFailure = (err: any) => {
    console.log('failed:', err)
  };

  return (
    <GoogleLogin
      className="google-button"
      clientId={siteConfig.GOOGLE_OAUTH_CLIENT_ID}
      buttonText="Connect with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      uxMode="redirect"
      redirectUri="/account_created_with_google"
    />
  )
};

export default ConnectWithGoogle;
