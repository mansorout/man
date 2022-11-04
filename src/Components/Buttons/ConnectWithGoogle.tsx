
import { Button, ButtonProps, styled, Typography } from "@mui/material";

const TextButton = styled(Button)<ButtonProps>(({ theme }) => ({
    textTransform: 'capitalize',
    width: '384px',
    height: '48px',
    borderRadius: '8px',
    margin:'auto',
    marginTop:'64px',
    border: 'solid 1px #23db7b',
    backgroundColor:'rgba(255, 255, 255, 0)',
  }));

  const ConnectWithGoogle = () => {
    return (
        <TextButton variant='text'>
            <Typography className='Button-Text'>Connect with Google</Typography>
        </TextButton>            
    )
};

export default ConnectWithGoogle;
