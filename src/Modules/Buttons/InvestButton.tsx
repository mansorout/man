import React from 'react'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ModalInvestNow from '../../Components/InvestNowScreen/ModalInvestNow'

export const InvestButton = (props: any) => {

    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const style = {
        button: {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "15px",
            width: "90%",
            maxWidth: "400px",
        } as React.CSSProperties,
        text: {
            color: "white"
        }
    }

    // const handleClick = () => {
    //     if (props?.openSaveModal) {
    //         props?.openSaveModal();
    //     } else {
    //         navigate("/redeemfund") //for handling side effects
    //     }
    // }

    return (
        <>
            <Button variant="contained" style={style.button} fullWidth onClick={() => setShowLogin(true)}>

                <Typography component="span" style={style.text} className="largeButtonText">Continue</Typography>
            </Button>
            <ModalInvestNow open={showLogin} close={() => setShowLogin(false)} />
        </>

    )
}


