import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InvestButton } from '../Buttons/InvestButton';
import Stack from '@mui/material/Stack';
import { CardActionArea, Grid, List, TextField } from '@mui/material';

import { graphimage, rupconvie, rupreturnlogo } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', }}
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
    RupConviestyle: {
        width: "40px",
        height: "40px",
        // margin: "0 16px 33px 20%"

    },

    ca: {

        backgroundColor: "#64dbff",
        width: "20px",
        height: "20px",
        padding: "10px",
        opacity: "0.9",


    } as React.CSSProperties,
    text: {
        color: "white",

    }


}
export default function RedeemSecFundCard() {
    return (
        <>
            <Card sx={{ maxWidth: 488, maxHeight: 366, marginLeft: "-3%", borderRadius: "8px",marginBottom:"5px" }}>
                {/* 
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{marginTop:"-4.56ch"}}>
          <img src={rupconvie} alt="image" style={style.RupConviestyle} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Exit Load" secondary="Exit load will be applicable if you are redeeming a fund within 365 days
         from the date of purchase. Exit load is a percentage of the NAV of the fund." sx={{  fontSize: "12px"}} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{marginTop:"-4.56ch"}}>
          <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tax Implications" secondary="Investors earn dividends and capital gains from liquid funds.
         Investors do not pay any tax on dividend income from mutual funds." sx={{  fontSize: "12px"}} />
      </ListItem>
<Box sx={{textAlign:"center",}}>
    <Typography sx={{fontSize:"12px",color:"#7b7b9d"}}>Final units or amount will depend on NAV applicable at the time of actual redemption request.</Typography>
</Box>
<Box>
    <Typography  sx={{fontSize:"12px",color:"#7b7b9d"}}>By continuing, you’re agreeing to SprintMoneyTM 
Terms and conditions</Typography>
</Box>

    </List> */}
                <CardContent>
                    <Box>
                        <Typography sx={{
                            width: "318px",
                            height: "21px",
                            margin: "5% 108px 22px 5%",
                            fontFamily: "Roboto",
                            fontSize: "18px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "normal",
                            textAlign: "left",
                            color: " #3c3e42"
                        }}>Advantages of Lump sum investment</Typography>
                    </Box>
                  
                    <Box>
                        <img src={rupconvie} alt="image" style={style.RupConviestyle} />
                    </Box>
                    <Box sx={{ marginLeft: "14%", marginTop: "-12%" }}>
                        <Typography sx={{
                            fontSize: "16px",


                        }}>Exit Load</Typography>
                        <Typography sx={{
                            width: "100%",
                            height: " 50px",
                            margin: " 4px 0 0 ",
                            fontSize: "14px",
                            fontWeight: "normal",
                            lineHeight: "1.21",
                            textAlign: " left",
                            color: "#7b7b9d"
                        }}>Exit load will be applicable if you are redeeming a fund within
                            365 days from the date of purchase. Exit load
                            is a percentage of the NAV of the fund.</Typography>
                    </Box>
                    &nbsp;
                    <Box>
                        <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
                    </Box>
                    <Box sx={{ marginLeft: "14%", marginTop: "-12%" }}>
                        <Typography sx={{ fontSize: "16px", }}>Tax Implications</Typography>
                        <Typography
                            sx={{
                                width: "100%",
                                height: " 50px",

                                fontFamily: " Roboto",
                                fontSize: "14px",
                                textAlign: " left",
                                color: "#7b7b9d"
                            }}
                        >Investors earn dividends and capital gains from liquid funds.
                            Investors do not pay any tax on dividend income from mutual funds.</Typography>
                    </Box>
                    <Box sx={{ textAlign: " center", }}>
                        <Typography sx={{
                            width: " 363px",
                            height: "31px",
                            margin: "19px 7px 19px 20px",
                            fontSize: " 12px",
                            fontWeight: "normal",
                            fontStyle: " normal",
                            lineHeight: "1.42",
                            letterSpacing: "normal",

                            color: "#7b7b9d",


                        }}>  Final units or amount will depend on NAV
                            applicable at the time of actual redemption request.</Typography>
                    </Box>
                    &nbsp;
                    <Box sx={{   textAlign: " center"}}>
                        <Typography sx={{
                    
                              height: "31px",
                              margin: "-4% 7px 19px 40px",
                              fontSize: " 12px",
                              fontWeight: "normal",
                              fontStyle: " normal",
                              lineHeight: "1.42",
                              letterSpacing: "normal",
                           
                              color: "#7b7b9d",
                        }}>
                            By continuing, you’re agreeing to SprintMoneyTM
                       
                        </Typography>
                    </Box>
             
                    <Box sx={{    textAlign: " center",}}>
                        <Typography sx={{
                        
                               marginTop:"-8%",
                               fontSize: " 12px",
                               fontWeight: "normal",
                               fontStyle: " normal",
                               lineHeight: "1.42",
                               letterSpacing: "normal",
                           
                               color: "#6c63ff",
                        }}>     Terms and conditions</Typography>
                    </Box>
                    {/* <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <img src={rupconvie} alt="image" style={style.RupConviestyle} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{
                                fontSize: "16px",


                            }}>Exit Load</Typography>
                            <Typography sx={{
                                width: "353px",
                                height: " 50px",
                                margin: " 4px 0 0 ",
                                fontSize: "14px",
                                fontWeight: "normal",
                                lineHeight: "1.21",
                                textAlign: " left",
                                color: "#7b7b9d"
                            }}>Exit load will be applicable if you are redeeming a fund within
                                365 days from the date of purchase. Exit load
                                is a percentage of the NAV of the fund.</Typography>
                        </Grid>
                    </Grid> */}
                    {/* <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{ fontSize: "16px", }}>Tax Implications</Typography>
                            <Typography
                                sx={{
                                    width: "353px",
                                    height: " 50px",
                                    margin: " 4px 0 0 ",
                                    fontFamily: " Roboto",
                                    fontSize: "14px",
                                    textAlign: " left",
                                    color: "#7b7b9d"
                                }}
                            >Investors earn dividends and capital gains from liquid funds.
                                Investors do not pay any tax on dividend income from mutual funds.</Typography>
                        </Grid>
                    </Grid> */}




                    {/* <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography sx={{
                                width: " 363px",
                                height: "31px",
                                margin: "19px 7px 19px 56px",
                                fontSize: " 12px",
                                fontWeight: "normal",
                                fontStyle: " normal",
                                lineHeight: "1.42",
                                letterSpacing: "normal",
                                textAlign: " center",
                                color: "#7b7b9d",


                            }}>  Final units or amount will depend on NAV
                                applicable at the time of actual redemption request.</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "-5%" }}>
                            <Typography
                                sx={{
                                    width: " 363px",
                                    height: "31px",
                                    margin: "-4% 7px 19px 56px",
                                    fontSize: " 12px",
                                    fontWeight: "normal",
                                    fontStyle: " normal",
                                    lineHeight: "1.42",
                                    letterSpacing: "normal",
                                    textAlign: " center",
                                    color: "#7b7b9d",
                                }}
                            >By continuing, you’re agreeing to SprintMoneyTM</Typography>
                            <Typography sx={{
                                width: " 363px",
                                height: "31px",
                                margin: "-5% 7px 19px 56px",
                                fontSize: " 12px",
                                fontWeight: "normal",
                                fontStyle: " normal",
                                lineHeight: "1.42",
                                letterSpacing: "normal",
                                textAlign: " center",
                                color: "#6c63ff",
                            }}>  Terms and conditions</Typography>
                        </Grid>
                    </Grid> */}
                </CardContent>
            </Card>



        </>



    );
}