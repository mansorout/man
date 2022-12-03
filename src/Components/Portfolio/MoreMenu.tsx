import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface MoreMenuProps {
    image: string,
    title: string,
}

const MoreMenu = (props: MoreMenuProps) => {

    return (
        <Box sx={{
            maxWidth: '22.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 -1.5rem 1.5rem 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff',
        }}>
            <Box>
                <img src={ props.image } alt="Company Logo" />
                <Typography>{ props.title }</Typography>
            </Box>
            <Box>
                <Typography>Redeem Fund</Typography>
                <ChevronRightIcon />
            </Box>
            <Box>
                <Typography>Buy More Funds</Typography>
                <ChevronRightIcon />
            </Box>
            <Box>
                <Typography>Show Transaction History</Typography>
                <ChevronRightIcon />
            </Box>
            <Box>
                <Typography>View Fund Details</Typography>
                <ChevronRightIcon />
            </Box>
        </Box>
    );
};

export default MoreMenu;
