import { Box, Button, Checkbox, Chip, Typography } from "@mui/material";
import { formatter, MorningStarLogo, ReplaceButtonIcon, RemoveButtonIcon, Star } from '../../Assets';

export interface MFProp {
  logo: string,
  title: string,
  fundType: string[],
  price: number,
  rating: number,
  morningStarLogo: boolean,
  oneYearReturn: number,
  threeYearReturn: number,
  fiveYearReturn: number,
  buttons?: boolean,
  checkbox?: boolean,
}


const OneTimeMutualFundCard = (props: MFProp) => {

  const style = {
    returns: {
      fontSize: '14px',
      color: '#7b7b9d',
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
      padding: '0.625vw 0.625vw 1.5vw 1.5vw',
      borderRadius: '0.625vw',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      backgroundColor: '#fff',
      fontFamily: 'Roboto',
      margin: 0,
    }}>
      <Box sx={{
        minWidth: '78.75vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'start',
      }}>
        <img src={props.logo} alt="Company Logo" style={{
          width: '2.4vw',
          height: '2.4vw',
          objectFit: 'contain',
          fontSize: '10px'
        }} />
        <Box>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#3c3e42',
          }}>{props.title}</Typography>
          {
            props.fundType.map(ft => <Chip label={ft} key={ft} sx={{
              borderRadius: '2px',
              backgroundColor: 'rgba(123, 123, 157, 0.16)',
              padding: '0.05vw 0.1vw',
              fontSize: '12px',
              fontWeight: 500,
              color: '#7b7b9d',
              opacity: 0.87,
              margin: '1vw 3vw 0 0'
            }} />)
          }
        </Box>
        <Chip label={formatter.format(props.price)} sx={{
          borderRadius: '2px',
          backgroundColor: 'rgba(108, 99, 255, 0.2)',
          padding: '0.2vw 0.3vw',
          fontSize: '12px',
          fontWeight: 500,
          color: '#6c63ff',
          opacity: 0.87,
          marginRight: '3vw'
        }} />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '49px',
            height: '24px',
            padding: '3.2px 6px 2.5px 2.5px',
            borderRadius: '2px',
            backgroundColor: 'rgba(255, 195, 0, 0.16)',

          }}>
            <img src={Star} width={18.3} height={18.3} style={{
              margin: '0 2.2px 0 0',
              objectFit: 'contain',
            }} />
            <Typography sx={{
              width: '20px',
              height: '16px',
              margin: '1.8px 0 0.5px 2.2px',
              paddingBottom: '3px',
              opacity: 0.54,
              fontSize: '14px',
              fontWeight: 500,
              color: 'black',
            }}>{props.rating}</Typography>
          </Box>
          <img src={MorningStarLogo} alt="Morning Star" width={57} height={16} style={{
            objectFit: 'contain',
            mixBlendMode: 'luminosity'
          }} />
        </Box>
        <Box sx={{
          width: '40%',
          display: 'flex',
          justifyContent: 'space-around',

        }}>
          <Box>
            <Typography style={style.returns}>1 yr return</Typography>
            <Typography style={style.amount}>{props.oneYearReturn}%</Typography>
          </Box>
          <Box>
            <Typography style={style.returns}>3 yrs return</Typography>
            <Typography style={style.amount}>{props.threeYearReturn}%</Typography>
          </Box>
          <Box>
            <Typography style={style.returns}>5 yrs return</Typography>
            <Typography style={style.amount}>{props.fiveYearReturn}%</Typography>
          </Box>
        </Box>
        {
          props.checkbox && 
            <Box>
              <Checkbox sx={{
                '& .MuiSvgIcon-root': { backgroundColor: '#23db7b', color: '#fff' } 
              }} />
            </Box>
        }
      </Box>
      {
        props.buttons &&
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
      }
      
    </Box>
  )
};

export default OneTimeMutualFundCard;
