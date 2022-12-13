import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InvestButton } from '../Buttons/InvestButton';
import Stack from '@mui/material/Stack';
import { Grid, ListItem, ListItemAvatar, TextField } from '@mui/material';
import List from '@mui/material/List';
import { graphimage, icbirthplacelogo, wclogo } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";
import './StyleIn.css'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import { minHeight } from '@mui/system';
;
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const style = {
    containertwo: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
        borderRadius: "8px",
        padding: "21px 40px",


    },
    dividerBox: {
        width: "470px",
        height: "1px",
        margin: "13.5% 0 17.5%",
        opacity: "0.2",
        backgroundColor: "#acb4bf",

    },

    cameraIcon: {

        width: "448px",
        height: " 67px",
        margin: "0 0 14px",
        objectFit: "contain"
    },

    emailIcon: {
        borderRadius: "170px 175px 175px 163px",
        backgroundColor: '#64dbff',
        width: '80px',
        height: '80px',
        margin: '0 54px 22px 34px',
        padding: '20px',
        boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
        border: 'solid 1px rgba(0, 0, 0, 0.08)',
    },
    button: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        margin: "16px",
        width: "90%",
        maxWidth: "400px",
        transform: "translate(8px, -23px)"


    },
    Axisstyle: {
        width: "14px",
        height: "14px",
        // margin: "8px 67px 0 0",
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#7b7b9d"
    },
    ca_a: {
        backgroundColor: "#64dbff",
        width: "32px",
        height: "32px",

        opacity: "0.9",
    },
    ca: {

        backgroundColor: "#64dbff",
        width: "32px",
        height: "32px",

        opacity: "0.9",


    } as React.CSSProperties,
    text: {
        color: "white",

    }


}
export default function InvestSecondCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Expected returns</Typography>

                    <Typography>

                        <img alt="Money Sprint" src={graphimage}
                            style={{
                                width: " 100%",
                                height: "67px",
                                margin: "0 0 14px",

                            }}>

                        </img>
                        <Box sx={{ display: "fles", justifyContent: "space-between" }}>
                            <Box>1Y</Box>
                            <Box>3Y</Box>
                            <Box sx={{ marginLeft: "11px" }}>5Y  <img alt="Money Sprint" src={ellipslogo} style={{
                                width: "14px",
                                marginTop: "-80%",
                                marginRight: "-50%",
                                borderRadius: "30px",
                                position: "relative",
                                top: "-33px",
                                left: "-18px",
                                fontSize: "12px",
                                boxShadow: "0 3px 6px 0 rgba(75, 123, 236, 0.12)",
                                backgroundColor: "#6c63ff",
                            }}></img></Box>
                            <Box sx={{ marginLeft: "-11px" }}>10Y</Box>
                            <Box>15Y</Box>
                            <Box>20Y</Box>
                        </Box>


                    </Typography>
                    <Grid container spacing={1} sx={{ marginTop: "5%" }}>
                        <Grid item xs={6} sx={{
                            width: " 84px",
                            height: "14px",
                            fontFamily: " Roboto",
                            fontSize: "12px",
                            fontWeight: "normal",
                            textAlign: "left",
                            color: " #7b7b9d"
                        }}>
                            Invested Value
                        </Grid>
                        <Grid item xs={6} sx={{
                            width: " 84px",
                            height: "14px",
                            fontFamily: " Roboto",
                            fontSize: "12px",
                            fontWeight: "normal",
                            textAlign: "right",
                            color: " #7b7b9d"
                        }}>
                            Projected Value
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} sx={{  paddingTop: "20px"}}>
                        <Grid item xs={6} sx={{
                            width: " 57px",
                            height: "24px",
                            fontFamily: " Roboto",
                            fontSize: "20px",
                            fontWeight: "300",
                            textAlign: "left",
                            color: " #3c3e42"

                        }}>
                            ₹1 Lac
                        </Grid>
                        <Grid item xs={6} sx={{
                            width: " 87px",
                            height: "24px",
                            paddingTop: "17px",
                            fontFamily: " Roboto",
                            fontSize: "20px",
                            fontWeight: "500",
                            textAlign: "right",
                            color: " #23db7b"
                            //   
                        }}>
                            ₹2.25 Lac
                        </Grid>
                    </Grid>


                    <Box style={style.dividerBox} ></Box>

                    <ListItem sx={{ marginTop: "12px" }} >

                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={withdrawiclogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>

                        <Typography sx={{ fontSize: "12px" }}>   *Anytime Withdraw</Typography>
                        <Avatar
                            alt=""
                            src={lockinlogo}
                            style={style.ca}

                            sx={{ marginLeft: '25px' }} />
                        &nbsp;   &nbsp;  &nbsp;
                        <Typography sx={{ fontSize: "12px" }}>*No Lock-in Period</Typography>

                 
                    </ListItem>
        
                </CardContent>

            </Card>
        </>



    );
}
