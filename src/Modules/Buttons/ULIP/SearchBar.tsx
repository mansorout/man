import { TextField, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const SearchBar = () => {
    return (
        <>
            <TextField
                placeholder="Search funds..."
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                    endAdornment: <InputAdornment position="end" sx={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#efefef',
                        borderRadius: '50%',
                        padding: '0.375vw',
                        color: '#09b85d',
                    }}><FilterAltOutlinedIcon /></InputAdornment>
                }}
                sx={{
                    width: '30vw',
                    height: '3.6vw',
                    borderRadius: '0.3125vw',
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
                    border: 'solid 1px #dddfe2',
                    backgroundColor: '#fff'
                }}
            />
        </>
    )
};

export default SearchBar;
