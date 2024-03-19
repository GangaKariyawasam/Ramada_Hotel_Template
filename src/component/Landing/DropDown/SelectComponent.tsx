// const DropDown: React.FC = () =>{
//     return(
//
//     )
// }
//
// export default DropDown;

import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectorComponentProps{
    title: string
}

const SelectComponent: React.FC<SelectorComponentProps> =({title}) => {
    const [name, setName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Name"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectComponent;