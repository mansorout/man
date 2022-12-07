import { Box, Checkbox, Grid, Button, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  const naviagte = useNavigate()

  return (

    <Box sx={{
      padding: '0.625vw 0.625vw 1.5vw 1.5vw',
      borderRadius: '0.625vw',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      backgroundColor: '#fff',
      fontFamily: 'Roboto',
      margin: 0,
    }}>
      <Grid container spacing={2} sx={{
        width: '78.75vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
      }}>

        <Grid item xs={8} sm={5} sx={{
          display: 'flex',
        }}>
          <Box sx={{
            width: '3vw',
            height: '3vw',
            padding: '2px',
            border: 'solid 1px #d1d6dd',
            backgroundColor: '#fff',
            borderRadius: '50%',
            marginRight: '1vw',
          }}>
            <img src={props.logo} alt="Company Logo" style={{
              width: '2.4vw',
              height: '2.4vw',
              margin: '2px',
              objectFit: 'contain',
              fontSize: '10px',
            }} />
          </Box>
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
        </Grid>
        <Grid item xs={2}>
          <Chip label={formatter.format(props.price)} sx={{
            borderRadius: '2px',
            backgroundColor: 'rgba(108, 99, 255, 0.2)',
            padding: '0.2vw 0.3vw',
            fontSize: '12px',
            fontWeight: 500,
            color: '#6c63ff',
            opacity: 0.87,
          }} />
        </Grid>
        <Grid container item xs={2} sm={1} sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Grid item sx={{
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
          </Grid>
          <img src={MorningStarLogo} alt="Morning Star" width={57} height={16} style={{
            objectFit: 'contain',
            mixBlendMode: 'luminosity'
          }} />
        </Grid>
        <Grid item xs={10} sm={4} sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Box component="span">
            <Typography style={style.returns}>1 yr return</Typography>
            <Typography style={style.amount}>{props.oneYearReturn}%</Typography>
          </Box>
          <Box component="span">
            <Typography style={style.returns}>3 yrs return</Typography>
            <Typography style={style.amount}>{props.threeYearReturn}%</Typography>
          </Box>
          <Box component="span">
            <Typography style={style.returns}>5 yrs return</Typography>
            <Typography style={style.amount}>{props.fiveYearReturn}%</Typography>
          </Box>
          {
            props.checkbox &&
            <Box component="span">
              <Checkbox />
            </Box>
          }
        </Grid>

      </Grid>


      {
        props.buttons &&
        <Grid sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1vw',
        }}>
          <Button variant='contained' style={style.buttons} sx={{
            backgroundColor: 'rgba(123, 123, 157, 0.05)',
            color: '#7b7b9d'
          }}
            onClick={() => naviagte('/replaceFunds')}
          >
            <img src={ReplaceButtonIcon} />
            Replace
          </Button>
          <Button variant="contained" style={style.buttons} sx={{
            backgroundColor: 'rgba(255, 83, 0, 0.05)',
            color: '#ff5300'
          }}
            onClick={() => naviagte('/under')}
          >
            <img src={RemoveButtonIcon} />
            Remove
          </Button>
        </Grid>
      }

    </Box >

  )
};

export default OneTimeMutualFundCard;
