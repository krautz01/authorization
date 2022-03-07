import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}>
            <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <TextField
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <Button variant="contained"
                onClick={() => handleClick(email, pass)}>
                {title}
            </Button>
        </Box>
    )
}

export { Form }
