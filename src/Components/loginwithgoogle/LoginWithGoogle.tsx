// import { IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
// import  { GoogleLogin } from 'react-google-login';

const clientID = "823267183036-k02hrr39426mgjc3ud146iov09e80dgf.apps.googleusercontent.com";

export default function LoginWithGoogle(props: any) {

  useEffect(() => {
    doAuthenticationWithGoogle();
  }, []);


  const doAuthenticationWithGoogle = () => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);

    // @ts-ignore
    google?.accounts?.id.initialize({
      client_id: clientID, //client id
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
  }

  const handleCallBackResponse = (res: any) => {
    const userProfile = jwt_decode(res.credential);
    props.getProfile(userProfile);
  }

  return (
    <div id={"login"} style={{
      marginTop: '10px'
    }}>

    </div>
  )
}


