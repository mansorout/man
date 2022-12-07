import { Box } from '@mui/material';
import ULIPButton from "../../Buttons/ULIP/ULIPButton";

const ULIPFooter = () => {
    return (
        <Box sx={{
            width: '83.75vw',
            height: '6vw',
            position: 'sticky',
            right: 0,
            bottom: 0,
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ULIPButton text="Select ULIP Date" navigateTo="/" />
        </Box>
    )
};

export default ULIPFooter;
