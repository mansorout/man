import { Box, Chip, Grid, Typography } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { formatter } from "../../Assets";

export interface SipProp2 {
    logo: string,
    title: string,
    orderNo: string,
    fundType: string[],
    mandatePending: boolean,
    sipDate: string,
    sipAmount: number,
    status: string,
    stopMessage?: string,
}

const SipCard2 = (props: SipProp2) => {

    const style = {
        returns: {
          fontSize: '14px',
          color: '#7b7b9d',
        },
        amount: {
          fontSize: '18px',
          color: '#3c3e42',
        },
    };

    return (
        <Box sx={{
            width: '76.25vw',
            display: 'flex',
            borderRadius: '0.625vw',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            fontFamily: 'Roboto',
            padding: '1.1vw 1.25vw 0',
            margin: '2vw'
        }}>
            <Grid container spacing={2} sx={{ marginBottom: '1.64vw' }}>
                <Grid container item xs={12} md={6}>
                    <Grid container item xs={2} sx={{ justifyContent: 'center' }}>
                        <Box sx={{
                            width: '38px',
                            height: '38px',
                            padding: '2px',
                            border: 'solid 1px #d1d6dd',
                            backgroundColor: '#fff',
                            borderRadius: '50%',
                        }}>
                            <img src={props.logo} alt="Company Logo" style={{
                                
                                objectFit: 'contain',
                                fontSize: '10px'
                            }} />
                        </Box>
                    </Grid>
                    <Grid container item xs={10}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5vw'
                        }}>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 500,
                                color: '#3c3e42',
                            }}>{props.title}</Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                letterSpacing: '0.42px',
                                color: '#7b7b9d'
                            }}>
                                Order No:&nbsp; 
                                <Box component="span" sx={{ fontWeight: 500 }}>{ props.orderNo }</Box>
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            {
                                props.fundType.map(ft => <Chip label={ft} key={ft} sx={{
                                borderRadius: '2px',
                                backgroundColor: 'rgba(123, 123, 157, 0.16)',
                                padding: '2px 3px',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#7b7b9d',
                                opacity: 0.87,
                                }} />)
                            }
                            {
                                props.mandatePending && 
                                    <Box sx={{
                                        display: 'flex',
                                    }}>
                                        <img src="" width="20" height="20" />
                                        <Box component="span" sx={{
                                            width: '96px',
                                            padding: '4.5px 6px 4.5px 4px',
                                            borderRadius: '2px',
                                            backgroundColor: 'rgba(108, 99, 255, 0.2)',
                                            fontSize: '10px',
                                            fontWeight: 'bold',
                                            color: 'black',
                                            letterSpacing: '0.5px',
                                            opacity: 0.74,
                                        }}>Mandate Pending</Box>
                                    </Box>
                            }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={6} sx={{
                    padding: '0 2vw',
                }}>
                    <Grid container item xs={1}></Grid>
                    <Grid container item xs={5}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5vw'
                        }}>
                            <Typography style={style.returns}>SIP Date</Typography>
                            <Typography style={style.amount}>{ props.sipDate }</Typography>
                        </Box>
                    </Grid>
                    <Grid container item xs={3}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5vw'
                        }}>
                            <Typography style={style.returns}>SIP Amount</Typography>
                            <Typography style={style.amount}>{ formatter.format(props.sipAmount) }</Typography>
                        </Box>
                    </Grid>
                    <Grid container item xs={3}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5vw'
                        }}>
                            <Typography style={style.returns}>Status</Typography>
                            <Chip label={ props.status } sx={{
                                padding: '4px 13px 3px 15px',
                                borderRadius: '2px',
                                backgroundColor: 'rgba(35, 219, 123, 0.2)',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: 'black',
                                letterSpacing: '0.7px'
                            }}/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(108, 99, 255, 0.12)',
                color: '#6c63ff'
            }}>
                <MoreVertOutlinedIcon />
            </Box>
        </Box>
    )
};

export default SipCard2;
