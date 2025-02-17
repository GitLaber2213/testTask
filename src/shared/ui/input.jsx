import React from 'react';
import { TextField } from '@mui/material';

export const MakeInput = ({ label, name, type = "text", color = 'success', handleChange, value, inputProps }) => {
    return (
        <TextField
            value={value}
            onChange={(event) => handleChange(name, event.target.value)}
            label={label}
            variant="outlined"
            fullWidth
            type={type}
            required
            color={color}
            InputLabelProps={{
                sx: {
                    color: 'white',
                },
            }}
            sx={{
                bgcolor: 'transparent',
                color: 'white',
                '& .MuiInputBase-root': {
                    color: 'white',
                },
            }}
        />
    )
}