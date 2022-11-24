import { Box, Chip, Typography } from "@mui/material";
import { formatter } from '../../Assets';

export interface PortfolioProp {
  image: string,
  title: string,
  fundType: string[],
  price: number,
  investedValue?: number,
  currentValue?: number,
  absoluteReturn?: number,
  absoluteReturnGrowth?: number,
  threeYearReturn?: number,
  threeYearReturnGrowth?: number,
  fiveYearReturn?: number,
  fiveYearReturnGrowth?: number,
}


const PortfolioCompanyCard = (props: PortfolioProp) => {

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
      }
  }

  return (
    <Box sx={{
      minWidth: '78.75vw',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'start',
      padding: '0.625vw 0.625vw 1.5vw 1.5vw',
      borderRadius: '0.625vw',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      backgroundColor: '#fff',
      fontFamily: 'Roboto',
      margin: '2vw'
    }}>
      <img src={props.image} alt="Company Logo" style={{
        width: '2.4vw',
        height: '2.4vw',
        objectFit: 'contain'
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
            padding: '0.2vw 0.3vw',
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
        width: '40%',
        display: 'flex',
        justifyContent: 'space-around',
        
      }}>
        <Box>
          <Typography style={ style.returns }>Invested Value</Typography>
          <Typography style={ style.amount }>{formatter.format(props.investedValue as number)}</Typography>
        </Box>
        <Box>
          <Typography style={ style.returns }>{props.currentValue ? 'Current Value' : '3 yrs return'}</Typography>
          <Typography style={ style.amount }>{formatter.format(props.currentValue ? props.currentValue : props.threeYearReturn as number)}</Typography>
        </Box>
        <Box>
          <Typography style={ style.returns }>{props.absoluteReturn ? 'Absolute Return' : '5 yrs return'}</Typography>
          <Typography style={ style.amount }>
            <Box component='span'>
              {formatter.format(props.absoluteReturn ? props.absoluteReturn : props.fiveYearReturn as number)}
            </Box>
            <Box component='span' style={ Number(props.absoluteReturnGrowth) >= 0 || Number(props.fiveYearReturnGrowth) >= 0 ? style.growthGreen : style.growthRed }>
              {`(${props.absoluteReturn ? props.absoluteReturnGrowth : props.fiveYearReturnGrowth}%)`}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PortfolioCompanyCard
