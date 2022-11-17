import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const Nominee = () => {
    return (
        <Box component="form" sx={{
            width: '30.5rem',
            height: '25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            fontFamily: 'Roboto',
            fontSize: '14px',
        }}>
            <Typography sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#3c3e42',
            }}>Add Nominee & Declarations</Typography>

            <FormControl>
                <TextField required label="Full Name" />
            </FormControl>

            <FormControl>
                <TextField type="date" label="Date of Birth" placeholder="" />
            </FormControl>

            <FormControl>
                <InputLabel>Relation</InputLabel>
                <Select label="Relation">
                    <MenuItem value="father">Father</MenuItem>
                    <MenuItem value="mother">Mother</MenuItem>
                    <MenuItem value="wife">Wife</MenuItem>
                    <MenuItem value="husband">Husband</MenuItem>
                    <MenuItem value="sister">Sister</MenuItem>
                    <MenuItem value="brother">Brother</MenuItem>
                    <MenuItem value="son">Son</MenuItem>
                    <MenuItem value="daughter">Daughter</MenuItem>
                    <MenuItem value="nephew">Nephew</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <Button variant="contained" sx={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                    backgroundColor: '#23db7b',
                    padding: '1rem',
                    textTransform: 'capitalize'
                }}>Submit Details</Button>
            </FormControl>
        </Box>                
    )
};

export default Nominee;
