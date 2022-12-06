import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InvestButton } from '../Buttons/InvestButton';
import Stack from '@mui/material/Stack';
import { CardActionArea, Checkbox, FormControlLabel, Grid, Radio, TextField } from '@mui/material';
import List from '@mui/material/List';
import { graphimage } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";
import { useNavigate } from 'react-router-dom';
import { RadioButtonChecked, RadioButtonUncheckedOutlined } from '@mui/icons-material';
import { useState } from 'react';

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
    const [optSelected, setOptSelected] = useState<boolean[]>([true, false, false, false])
    const [buttonSelect, setButtonSelect] = useState(true)
    const handleOptChange = (index: number) => {
        index === 0 ?
            setOptSelected([true, false, false, false])
            : index === 1 ? setOptSelected([false, true, false, false])
                : index === 2 ? setOptSelected([false, false, true, false])
                    : setOptSelected([false, false, false, true])
    }

    const handleClickFull = () => {
        setButtonSelect(false)
    }
    const handleClickPartial = () => {
        setButtonSelect(true)
    }
    const navigate = useNavigate()

    return (
        <> <Card sx={{ marginTop: "25px", maxHeight: "388px" }}>
            <CardContent>
                <Grid container spacing={12}>
                    <Grid item xs={7} md={6} >

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


                    </Grid>
                    <Grid item xs={5} md={6} sx={{ marginTop: "-2%" }}>


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
                        }}
                            onClick={handleClickPartial}
                        >PARTIAL</Button>

                        <Button sx={{
                            color: "#09b85d",
                            width: "56px",
                            height: "35px",
                            padding: "10px 12px 9px",
                            borderRadius: "8px",
                            border: "solid 1px rgba(123, 123, 157, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            marginTop: "7%",
                            marginLeft: "1%"
                        }}
                            onClick={handleClickFull}
                        >Full</Button>
                        &nbsp; &nbsp;


                    </Grid>
                </Grid>



                {
                    buttonSelect ? <>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>  <Typography sx={{
                            height: " 16px", fontSize: " 14px", textAlign: " left", color: "#3c3e42", marginLeft: "-67%", marginTop: "-10%", fontWeight: "bold"
                        }}>Redemption by</Typography></Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>


                            <FormControlLabel
                                control={<Checkbox onChange={() => handleOptChange(0)} checked={optSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                label="Amount: ₹1,46,625 " sx={{ marginLeft: "-11%", marginTop: '-20%' }} />

                            &nbsp; &nbsp;
                            <FormControlLabel
                                control={<Checkbox onChange={() => handleOptChange(1)} checked={optSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                label="Units: 750.762" sx={{ marginTop: '-20%' }} />

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
                                    marginTop: "-7%"
                                }}
                                fullWidth
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
                                    width: "100%",

                                    marginTop: "-4%",
                                    fontSize: " 12px",
                                    textAlign: "left",
                                    color: "#8787a2"
                                }}
                            >Maximum  redemption amount ₹25,000</Typography>
                        </Box> </> : <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                            <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal" }}>Invested Value</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal" }}>Current Value</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} sx={{ marginTop: "-5%" }}>
                            <Typography sx={{ color: "#3c3e42", fontSizeL: "18px" }}>₹1,25,000</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} sx={{ marginTop: "-5%" }}>
                            <Typography>₹1,46,625</Typography>
                        
                        </Grid>

                    </Grid>

                }



            </CardContent>

        </Card>

        </>



    );
}