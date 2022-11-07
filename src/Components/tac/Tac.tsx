import { Box, Container, Grid, Button, Divider, Typography } from "@mui/material";
import { FC } from 'react';
import Header from "../Header";


const Tac: FC<Props> = (props: Props) => {

    return (
        <>
            <Header />
            <Container sx={{
                width: '67.5vw',
                marginTop: '2.266vw',
                marginBottom: '5vw',
                backgroundColor: '#f9f9f9',
                fontFamily: 'Roboto',
                lineHeight: 1.5,
            }}>
                <Box className='upper' sx={{
                    backgroundColor: 'white',
                    padding: '3vw',

                }}>
                    <Container className='content' sx={{
                        width: '53.75vw',
                        textAlign: 'left',
                    }}>
                        <Typography sx={{
                            fontSize: '1.4vw',
                            fontWeight: 500,
                            color: '#3c3e42',
                            marginBottom: '0.78vw',
                        }}>
                            Terms and Conditions
                        </Typography>
                        <Divider sx={{ color: 'rgba(0, 0, 0, 0.08)', width: '53.75vw' }} />
                        <Box sx={{
                            width: '53.75vw',
                            margin: '1.875vw 0 3.83vw',
                            fontSize: '0.938vw',
                            color: '#7b7b9d'
                        }}>
                            <Typography paragraph sx={{ fontSize: '0.938vw' }}>
                                Wildflower Consulting and Business Solutions Private Limited is a company registered
                                with the Securities and Exchange Board of India as an Investment Advisor under SEBI
                                (Investment Advisers) Regulations, 2013 vide registration no. INAXXXXXXXXX dated
                                December 17, 2018 having its registered office at B-1408, Flr-14, Aster Apts,
                                Dosti Acres Shaikh Misree Road, New Uphill Link Antop Hill, Wadala,mumbai Mumbai City
                                MH In 400037
                            </Typography>
                            <Typography paragraph sx={{ fontSize: '0.938vw' }}>
                                Wildflower Consulting and Business Solutions Private Limited operate mobile application
                                under brand names SprintMoney enables you to track, save and earn extra by automatically
                                bringing your entire financial life across investments, loans, credit cards & taxes,
                                all in one app. SprintMoney is committed to operating its mobile application with the
                                highest ethical standards and appropriate internal controls.
                            </Typography>
                            <Typography paragraph sx={{ fontSize: '0.938vw' }}>
                                Please note that your visit, use of or access to our mobile application (collectively
                                referred to as “Services” or “Application”) are subject to the following terms; if you
                                do not agree to all of the following, you may not use or access the Services in any manner.                            
                            </Typography>
                        </Box>
                        <Typography sx={{
                            fontSize: '1.25vw',
                            fontWeight: 500,
                            color: '#3c3e42',
                            margin: '3.83vw 0 0.78vw'
                        }}>
                            Terms of Use
                        </Typography>
                        <Divider sx={{ color: 'rgba(0, 0, 0, 0.08)', width: '53.75vw' }} />
                        <Box sx={{
                            width: '53.75vw',
                            marginTop: '1.094vw',
                            fontSize: '0.938vw',
                            color: '#7b7b9d'
                        }}>
                            <Typography paragraph sx={{ fontSize: '0.938vw' }}>
                                Please read on to learn the rules and restrictions that govern your use of our Services.
                                These Terms and Conditions (the “Terms”) are a binding contract between you and SprintMoney.
                                If you have any questions, comments, or concerns regarding these terms or the Services, please
                                contact us at support@sprintmoney.in, support@sprintmoney.com
                            </Typography>
                            <Typography paragraph sx={{ fontSize: '0.938vw' }}>
                                You must agree to and accept all of the Terms, or you don’t have the right to use the Services.
                                Your using the Services in any way means that you agree to all of Terms, and these Terms
                                will remain in effect while you use the Services.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='lower' sx={{
                    width: '53.75vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '2.89vw',
                    paddingLeft: '6.75vw'
                }}>
                    <Box component='span' sx={{
                        fontSize: '0.938vw',
                        color: '#7b7b9d'
                    }}>
                        By continuing, I agreeing to SprintMoney<sup>TM</sup>
                    </Box>
                    <Button variant='contained' sx={{
                        width: '26.25vw',
                        height: '3.75vw',
                        borderRadius: '0.625vw',
                        boxShadow: '0 0.3125vw 0.625vw 0 rgba(35, 219, 123, 0.4)',
                        backgroundColor: '#23db7b',
                        fontSize: '1.25vw',
                        fontWeight: 500,
                        color: '#fff'
                    }}>
                        Accept
                    </Button>
                </Box>
            </Container>
        </>
    )
};

export default Tac;
