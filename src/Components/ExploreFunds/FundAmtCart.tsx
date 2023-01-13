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
import { makeStyles } from '@mui/styles';
import { Theme, } from '@mui/material'


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


const useStyles: any = makeStyles((theme: Theme) => ({
    cardWrap: {
        boxShadow: 'var(--themeShadow)',
        // padding: '15px 7px',
        paddingBottom: '15px',
        borderRadius: '8px',
    },
    cardDeactiveState: {
        backgroundColor: '#ddd',
        marginBottom: '10px !important',
    },
    headingWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '12px',
        // justifyContent: 'center',
        '& img': {
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '1px solid #f2f2f2',
            display: 'inline-block',
            marginRight: '10px',
        }
    },
    cardHeading: {
        color: 'var(--typeLightBlackColor)',
        fontWeight: 500,

    },
    cardBtnWrap: {
        backgroundColor: 'var(--uiWhite)',
        '& button': {
            boxShadow: 'none',
        }
    }

}))

interface FundAmtCard {
    data: any;
    investmentType: number;
    handleOnChangeFun: (e:any,param: any) => void;
    replaceBtnAction: (param:any) => void;
    removeBtnAction: (param:any) => void;
}

export default function FundAmtCard(props: FundAmtCard) {
    const classes = useStyles()
    const [amount, setAmount] = React.useState<any>();
    const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");
    const [error, setError] = React.useState<any>("")

    function handleChange(e: any) {
        const value = e.target.value;
        setAmount(value)
    }

    function handleOnBlurAmount(e: any) {
        if(props.investmentType === 1){
            if (amount < props.data.lumpsumminamount) {
                setError(true)
                setErrorMessageFN(`Amount should be greater than ${props.data.lumpsumminamount}`)
            }
        } else{
            if (amount < props.data.sipminamount) {
                setError(true)
                setErrorMessageFN(`Amount should be greater than ${props.data.sipminamount}`)
            } 
        }
        
    }
    let textColor = "#8787a2"
    if (amount === "" || !amount || amount?.length == 0) {
        textColor = "#8787a2"
    } else if (amount < props?.data?.sipminamount || amount < props?.data?.lumpsumminamount) {
        textColor = 'red'
    }
    return (
        <>
            <Card sx={{ maxWidth: { sm: 600, xs: 350 }, padding: '0px', marginBottom: '15px' }}>
                <Box className={`${classes.cardWrap}`}>
                    <Stack m={2} spacing={6}
                        className={
                            `${props?.investmentType === 1 ?
                                props?.data?.islumpsumenabled === 1 ? '' : classes.cardDeactiveState
                                :
                                props?.data?.issipenabled === 1 ? '' : classes.cardDeactiveState
                            }`
                        }
                        sx={{ margin: '0px', padding: '15px' }}>
                        <Box className={classes.headingWrap}>
                            <img src={maskgroup} />
                            <Typography className={classes.cardHeading}>
                                {`${props?.data?.fundname}`}
                            </Typography>
                        </Box>

                        {

                            (props?.data?.islumpsumenabled === 1 || props?.data?.issipenabled === 1)  ?
                                    (
                                    <List>
                                        <TextField label="Enter Investment Amount"
                                            type="number"
                                            name="middleName"
                                            fullWidth
                                            placeholder='₹1,00,000'
                                            onBlur={handleOnBlurAmount}
                                            onChange={(e) => props?.handleOnChangeFun(e, props?.data)}
                                            value={amount}
                                            sx={{ margin: " -55px 0 20px", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", backgroundColor: " #fff" }} >
                                        </TextField>
                                        <Typography
                                            sx={{
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
                                        >{props?.investmentType === 1 ? amount < props?.data?.lumpsumminamount && `Minimum investment amount is ₹${props?.data?.lumpsumminamount}` : amount < props?.data?.sipminamount && `Minimum investment amount is ₹${props?.data?.sipminamount}`}</Typography>
                                    </List>
                                    ) : (
                                        <Box sx={{ borderTop: '1px solid #acacac', margin: '0px !important', paddingTop: '10px' }}>
                                            <Typography component='p'>
                                                This fund is not accepting Lumpsum investment currently.
                                            </Typography>
                                        </Box>
                                    )
                                
                        }
                    </Stack>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '1vw',
                    }}
                        className={classes.cardBtnWrap}
                    >
                        <Button variant='contained'
                            sx={{
                                backgroundColor: 'rgba(123, 123, 157, 0.05)',
                                color: '#7b7b9d', ml: 1,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: 'rgba(123, 123, 157, 0.05)'
                                }
                            }}
                            onClick={() => props.replaceBtnAction(props?.data)}
                        >
                            <img src={ReplaceButtonIcon} />
                            Replace
                        </Button>
                        <Button variant="contained" sx={{
                            backgroundColor: 'rgba(255, 83, 0, 0.05)',
                            color: '#ff5300', ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: 'rgba(255, 83, 0, 0.05)'
                            }
                        }}
                        onClick={() => props.removeBtnAction(props?.data)}
                        >
                            <img src={RemoveButtonIcon} />
                            Remove
                        </Button>
                    </Box>
                </Box>
            </Card>

        </>



    );
}