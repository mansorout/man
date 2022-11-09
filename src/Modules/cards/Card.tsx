import { Box, Container, Typography } from "@mui/material";
import './Card.css';

interface Props {
    title: string;
    content: string;
    image: string;
}

const Card = (props: Props) => {
    return (
        <Box sx={{
            maxWidth: '300px',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: 'rgba(45, 118, 255, 0.07)',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <img src={`${props.image}`} alt="card visual" style={{ margin: '0.5rem 0' }} />
            </Box>
            <Box sx={{
                padding: '1.25rem',
            }}>
                <Typography sx={{
                    fontSize: { xs: '12px', sm: '16px' },
                    fontWeight: 500,
                    color: '#3c3e42'
                }}>{ props.title }</Typography>
                <Typography className="card-content" sx={{
                    fontSize: { xs: '10px', md: '12px' },
                    color: '#7b7b9d',
                    lineHeight: 1.17,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                }}>{ props.content }</Typography>
            </Box>
        </Box>        
    )
};

export default Card;
