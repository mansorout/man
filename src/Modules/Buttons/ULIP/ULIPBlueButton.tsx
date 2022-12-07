import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { ULIPButtonProp } from './ULIPButton';

const ULIPBlueButton = (prop: ULIPButtonProp) => {

    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3vw',
        }}>
            <Button onClick={() => navigate(prop.navigateTo)} sx={{
                width: '210px',
                height: '44px',
                padding: '13px 27px 12px 28px',
                borderRadius: '32px',
                backgroundColor: '#00b4ff',
                fontSize: '12px',
                fontWeight: 500,
                color: '#fff',
            }}>{ prop.text }</Button>
        </Box>
    )
};

export default ULIPBlueButton;
