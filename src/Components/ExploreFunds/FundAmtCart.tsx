import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid, TextField } from '@mui/material';
import List from '@mui/material/List';
import { InvestButton } from '../../Modules/Buttons/InvestButton';
import { maskgroup, RemoveButtonIcon, ReplaceButtonIcon } from '../../Assets';


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

    },
    buttons: {
        width: '9.84vw',
        height: '2.5vw',
        padding: '0.625vw 2.2vw',
        borderRadius: '0.625vw',
        fontSize: '15px',
        fontWeight: 500,
        margin: '4ox'
    }


}

interface FundAmtCard {
    heading: string;
}

export default function FundAmtCard(props: FundAmtCard) {

    const [amount, setAmount] = React.useState<any>();
    const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");
    const [error, setError] = React.useState<any>("")

    function handleChange(e: any) {
        const value = e.target.value;
        setAmount(value)
    }

    function handleOnBlurAmount(e: any) {
        if (amount < 5000) {
            setError(true)
            setErrorMessageFN("Amount should be greater than 5000")
        } else if (amount > 20000000) {
            setError(true)
            setErrorMessageFN("Amount should be less than 2 Cr")
        } else {
            setErrorMessageFN("")
        }
    }
    let textColor = "#8787a2"
    if(amount === "" || !amount || amount?.length == 0 ){
        textColor = "#8787a2"
    }else  if(amount < 5000 || amount > 20000000){
        textColor = 'red'
    }
    return (
        <>
            <Card sx={{ maxWidth: { sm: 600, xs: 350 }, marginBottom: 5 }}>
                <CardContent>
                    <Stack m={2} spacing={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ height: 20, width: 20 }} src={maskgroup} />
                            <Typography
                                sx={{
                                    height: "19px",
                                    margin: "0 303px 25px 0",
                                    fontFamily: "Roboto",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    fontStretch: "normal",
                                    fontStyle: "normal",
                                    lineHeight: "1.25",
                                    letterSpacing: "normal",
                                    textAlign: " left",
                                    color: " #3c3e42",
                                    minWidth: { md: 600, xs: 350 }
                                }}
                            >{`${props.heading}`}</Typography>
                        </Box>

                        <List>

                            <TextField label={amount > 20000000 ? "" :"Enter Investment Amount"}
                                name="middleName"
                                fullWidth
                                placeholder='₹1,00,000'
                                onBlur={handleOnBlurAmount}
                                onChange={handleChange}
                                value={amount}
                                sx={{ margin: " -55px 0 20px", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", backgroundColor: " #fff" }} >
                            </TextField>
                            <Typography
                                sx={{
                                    width: "304px",
                                    height: "14px",
                                    margin: "-8px 135px 0 1px",

                                    fontSize: "12px",
                                    fontWeight: "normal",
                                    fontStretch: "normal",
                                    fontStyle: "normal",
                                    lineHeight: " 1.33",
                                    letterSpacing: "normal",
                                    textAlign: " left",
                                    color: textColor,
                                }}
                            >{amount > 20000000 ? `Maximum amount you can invest is ₹2 Cr` : `Minimum investment amount is ₹5,000`}</Typography>
                        </List>
                    </Stack>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '1vw',
                    }}>
                        <Button variant='contained' style={style.buttons} sx={{
                            backgroundColor: 'rgba(123, 123, 157, 0.05)',
                            color: '#7b7b9d'
                        }}>
                            <img src={ReplaceButtonIcon} />
                            Replace
                        </Button>
                        <Button variant="contained" style={style.buttons} sx={{
                            backgroundColor: 'rgba(255, 83, 0, 0.05)',
                            color: '#ff5300'
                        }}>
                            <img src={RemoveButtonIcon} />
                            Remove
                        </Button>
                    
                    </Box>
                </CardContent>
            </Card>

        </>



    );
}