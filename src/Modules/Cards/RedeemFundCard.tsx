import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Radio, TextField } from '@mui/material';
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";
import { useNavigate } from 'react-router-dom';
import { InvestButton } from '../Buttons/InvestButton';
import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import { graphimage } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'


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


export default function RedeemFundCard() {
    const navigate=useNavigate()
    const [selectedValue, setSelectedValue] = React.useState('a');
    return (
        <>

        <Box>


            <Card sx={{ maxWidth: 488,maxHeight:268, marginTop: "25px", marginLeft: "3%" }}>
                <CardContent>
                    <Box>
                        <Typography
                            sx={{

                                height: " 19px",
                                // margin: " 5% 62px 27px 5%",
                                fontFamily: "Roboto",
                                fontSize: "18px",
                                fontWeight: " 500",
                                textAlign: " left",
                                color: " #3c3e42"
                            }}
                        >Redemption type</Typography>
                        &nbsp;       &nbsp;       &nbsp;
                        <Typography sx={{

                            height: " 16px",
                            // margin: "5% 62px 27px 5%",

                            fontSize: " 14px",




                            textAlign: " left",
                            color: "#3c3e42"
                        }}>Redemption by</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right", marginTop: "-23%",marginLeft:"2%" }}>
                        <Button sx={{
                            color: "#09b85d",
                            width: " 79px",
                            height: " 35px",
                            padding: "10px 12px 9px",
                            borderRadius: "8px",
                            border: "solid 1px var(--seaweed)",
                            backgroundColor: "#dff7ea",
                            marginTop: "7%",
                            marginLeft: "-9%",


                        }}>PARTIAL</Button>

                        <Button onClick={()=>{
                            alert("hiii")
                        }} sx={{
                            color: "#09b85d",
                            width: "56px",
                            height: "35px",
                            padding: "10px 12px 9px",
                            borderRadius: "8px",
                            border: "solid 1px rgba(123, 123, 157, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            marginTop: "7%",
                            marginLeft: "1%"
                        }}>Full</Button>
                        &nbsp; &nbsp;

                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
                        <Typography sx={{fontSize:"14px"}} >

                            <Radio

                                sx={{ color: "#23db7b", marginLeft: "-7%" }}
                            />

                            Amount: ₹1,46,625

                        </Typography>
                        &nbsp; &nbsp;  
                        <Typography sx={{fontSize:"14px"}}>

                            <Radio
                                checked={selectedValue === 'b'}
                                onClick={()=>navigate('/redeemfund')}
                                // onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                //componentsProps={{ input: { 'aria-label': 'B' } }}
                                sx={{ color: "#23db7b", marginLeft: "-15%", marginTop: "-6%" }}

                            />
                            Units: 750.762</Typography>
                    </Box>
                    <Box>
                          <TextField label="Amount"
                        name="Amount"
                        //   value={formData.lastName}
                        sx={{
                            width: " 100%",
                            height: "56px",

                            borderRadius: "4px",
                            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                            border: "solid 1px #dddfe2",
                            backgroundColor: "#fff",
                         
                            marginTop: "5%"
                        }}

                    >

                    </TextField> 
                    </Box>
                     
                    <Box>
                    <Typography
                                sx={{
                                    width: "304px",
                                    height: "30px",
                                    // margin: "8px 135px 0 8%",
                                    fontSize: " 12px",
                                    textAlign: "left",
                                    color: "#8787a2"



                                }}
                            >Minimum redemption amount ₹500 </Typography>
                      
                              <Typography
                                sx={{
                                    width: "304px",
                                    height: "30px",
                                    marginTop: "-8px",
                                    fontSize: " 12px",
                                    textAlign: "left",
                                    color: "#8787a2"
                                }}
                            >Maximum  redemption amount ₹25,000</Typography>
                    </Box>
              
                </CardContent>

            </Card>

            </Box>

        </>



    );
}