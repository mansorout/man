import { Box, Button, Chip, Typography } from "@mui/material";
import { formatter, MorningStarLogo, ReplaceButtonIcon, RemoveButtonIcon, Star } from '../../Assets';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export interface SipProp {
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


const SipCard = (props: SipProp) => {

  const style = {
    returns: {
      fontSize: '14px',
      color: '#7b7b9d',
      marginBottom: '0.5vw'
    },
    amount: {
      fontSize: '18px',
      color: '#3c3e42',
    },
    growthRed: {
      color: '#db2323'
    },
    growthGreen: {
      color: '#23db7b'
    },
    buttons: {
      width: '9.84vw',
      height: '2.5vw',
      padding: '0.625vw 2.2vw',
      borderRadius: '0.625vw',
      fontSize: '11px',
      fontWeight: 500,
    }
  }

  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1vw',
      borderRadius: '0.625vw',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      backgroundColor: 'red',
      fontFamily: 'Roboto',
      paddingTop: '1vw',
    }}>
      <Box sx={{
        minWidth: '78.75vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'start',
        marginBottom: '1vw',
      }}>
        <Box sx={{
            width: '38px',
            height: '38px',
            padding: '2px',
            border: 'solid 1px #d1d6dd',
            backgroundColor: '#fff',
            borderRadius: '50%',
        }}>
            <img src={props.logo} alt="Company Logo" style={{
            width: '2.4vw',
            height: '2.4vw',
            objectFit: 'contain',
            fontSize: '10px'
            }} />
        </Box>
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
                  width: '7.5vw',
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
        
        <Box sx={{
          width: '40%',
          display: 'flex',
          justifyContent: 'space-around',

        }}>
          <Box>
            <Typography style={style.returns}>SIP Date</Typography>
            <Typography style={style.amount}>{ props.sipDate }</Typography>
          </Box>
          <Box>
            <Typography style={style.returns}>SIP Amount</Typography>
            <Typography style={style.amount}>{ formatter.format(props.sipAmount) }</Typography>
          </Box>
          <Box>
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
        </Box>
        <Box sx={{
            width: '1.875vw',
            height: '1.875vw',
            borderRadius: '50%',
            backgroundColor: 'rgba(108, 99, 255, 0.12)',
            color: '#6c63ff'
        }}>
            <MoreVertOutlinedIcon />
        </Box>
      </Box>
      { props.stopMessage &&
        <Box sx={{
          height: '1.875vw',
          padding: '0.5vw 1vw',
          marginBottom: '0',
          backgroundColor: 'rgba(35, 219, 123, 0.2)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.36px',
          color: '#544ec8',
          paddingLeft: '14.5vw'
        }}>
          <Typography>{ props.stopMessage }</Typography>
        </Box>
      }
    </Box>
  )
};

export default SipCard;
