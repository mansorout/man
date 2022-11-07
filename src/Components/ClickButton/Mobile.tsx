import { Divider, Box, Button, ButtonProps, styled, Typography } from "@mui/material";
import irdaImage from "../../Assets/logo-irda.png"
import amfiImage from "../../Assets/logo-amfi@2x.png"

const ThemeButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: '8px',
    margin: 'auto',
    backgroundColor: '#23db7b',
    // marginLeft: "132px",
    width: "384px",
    height: "48px",
    marginTop: "21px",
    position:"relative",
    top:"-160px"
}));
const ContWithMobile = () => {
     return (
        <>
            <div>
                  <ThemeButton variant='text'>
                    <Typography sx={{ textDecorationColor: 'white' }} color="White">Verify</Typography>
                   </ThemeButton>
            </div>
          
            </>
 )
};

export default ContWithMobile;




