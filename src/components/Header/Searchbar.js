import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
                marginLeft: '8px',
                backgroundColor: 'white',
                borderRadius: "2px",
                border:"2px solid rgb(148, 97, 142)",
                width:"620px",
                '& .MuiOutlinedInput-root': {
                    '& input::placeholder': {
                        color: 'black', 
                        fontSize: '14px', 
                        fontFamily:"Raleway, sans-serif"
                    },
                },
            }} 
        />
    );
};

export default SearchBar;
