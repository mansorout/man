import { Box } from '@mui/material';
import ULIPButton from "../../Buttons/ULIP/ULIPButton";
import { ULIPButtonProp } from '../../Buttons/ULIP/ULIPButton';

const ULIPFooter = (props: ULIPButtonProp) => {
    return (
        <Box sx={{
            width: '83.75vw',
            height: '48px',
            position: 'sticky',
            right: 0,
            bottom: 0,
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ULIPButton 
                text={ props.text } 
                navigateTo={ props.navigateTo } 
                width={ props.width } 
                bgColor={ props.bgColor }  
            />
        </Box>
    )
};

export default ULIPFooter;
