import { Button, ButtonProps, styled, Typography } from "@mui/material";

const ThemeButton = styled(Button)<ButtonProps>(({ theme }) => ({
    textTransform: 'capitalize',
    width: '384px',
    height: '48px',
    borderRadius: '8px',
    margin:'auto',
    marginTop:'16px',
    backgroundColor:'#23db7b',
  }));


const ContWithMobile = () => {
    return (
        <ThemeButton variant='text'>
            <Typography sx={{textDecorationColor:'white'}}>Continue with Mobile Number</Typography>
        </ThemeButton>            
    )
};

export default ContWithMobile;

