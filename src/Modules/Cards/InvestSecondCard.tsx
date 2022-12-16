import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InvestButton } from '../Buttons/InvestButton';
import Stack from '@mui/material/Stack';
import { Divider, Grid, ListItem, ListItemAvatar, TextField } from '@mui/material';
import List from '@mui/material/List';
import { graphimage, icbirthplacelogo, wclogo } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";
import './style.css'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import { minHeight } from '@mui/system';
import './style.css'
// ;
// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );



// }
export default function InvestSecondCard() {
    const style = {
        main: {
          boxSizing: "border-box",
          backgroundColor: "#f9f9f9",
          height: "100vh"
        } as React.CSSProperties,
        drawer: {
          zIndex: "500",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
        } as React.CSSProperties,
        image: {
          width: '176px',
        } as React.CSSProperties,
        profileContainer: {
          borderRadius: "8px",
          border: "solid 1px #4f46de",
          backgroundColor: "#6c63ff",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        },
        toolbar: {
          display: "flex",
          justifyContent: "space-between"
        },
        profile: {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid white"
        },
        profileInter: {
          width: "40px",
          height: "40px",
          border: "solid 1px rgba(75, 123, 236, 0.49)",
          borderRadius: "50%"
        },
        menuContainer: {
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
          boxSizing: "border-box",
          padding: "10px",
          backgroundColor: "white",
          marginRight: "20px"
        } as React.CSSProperties,
        menuButton: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0px"
        } as React.CSSProperties,
        ca: {
    
          backgroundColor: "#64dbff",
          width: "32px",
          height: "32px",
  
          opacity: "0.5",
    
    
        } as React.CSSProperties,
        ca_M:{
          backgroundColor: "#64dbff",
          width: "32px",
          height: "32px",
   
          opacity: "0.5",
        }as React.CSSProperties,
    
        menuText: {
          color: "black",
          fontSize: "10px",
          fontWeight: "500",
          padding: "5px 10px",
          borderRadius: "4px",
          backgroundColor: "#ffc300",
          cursor: "pointer"
        },
    
        dividerBox: {
          width: "100%",
          height: "1px",
          backgroundColor: "#acb4bf",
    
        },
        menuText2: {
          padding: "6px 12px",
          borderRadius: "4px",
          border: "solid 1px #23db7b",
          backgroundColor: "rgba(35, 219, 123, 0.12)",
          fontSize: "12px",
          fontWeight: "500",
          color: "#09b85d",
          cursor: "pointer"
        },
        modalContainer: {
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        } as React.CSSProperties,
        button: {
          height: "48px",
          borderRadius: "8px",
          boxShadow: "none",
          backgroundColor: "white",
          textAlign: "left",
          justifyContent: "flex-start",
        } as React.CSSProperties,
        menuIcon: {
          color: "#6c63ff",
          fontSize: "24px"
        },
        logo: {
          width: "50px",
          padding: "20px 0px",
        } as React.CSSProperties,
        appBar: {
          backgroundColor: "white",
        }
      }
    return (
        <>

          



     </>



    );
}
// {/* <Avatar alt="" src={withdrawiclogo} style={style.ca} />
// <Typography sx={{ fontSize: "12px", color: "#7b7b9d", }}>*Anytime Withdraw</Typography> */}


// {/* <Avatar alt="" src={lockinlogo} style={style.ca} />
// <Typography sx={{ fontSize: "12px", color: "#7b7b9d", }}>*No Lock-in Period </Typography> */}



