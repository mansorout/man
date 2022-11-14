import React from 'react'
import { Button, Typography } from '@mui/material'
import { Checkcirclelogo } from "../../Assets/index";
import { arrowForwedlogo } from "../../Assets/index";



export const VerificationpendingButton = () => {
    const style = {
        button_B: {
            height: "48px",
            borderRadius: " 8px",
            backgroundColor: "rgb(250, 220, 167)",
            margin: "0px",
            width: " 100%",
            maxWidth: "400px",


        } as React.CSSProperties,
        text_T: {
            color: "black",

            fontWeight: " 500",
            lineHeight: '2',
            opacity: "0.74",
        }
    }

    return (
        <Button variant="contained" style={style.button_B} fullWidth>
            <img src={Checkcirclelogo} width="16px" height="22.6" alt="Google Logo" />



            <Typography component="span" style={style.text_T} className="largeButtonText" >KYC Verification is pending</Typography>
            <img src={arrowForwedlogo} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "62px" }} />
        </Button>
    )
}




// padding:" 6px 5px 6px 7px";
// background-color: "var(--marigold)";
// width: 22.6px;
// height: 22.6px;
// margin: 2px 4.2px 0 0;
// object-fit: contain;
// opacity: 0.87;