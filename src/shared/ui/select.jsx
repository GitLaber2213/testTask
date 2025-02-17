import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"



export const MakeSelect = ({ handleChange, value, name }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{
                color: 'white',
                '&.Mui-focused': {
                    color: 'green',
                },
            }}>param</InputLabel>
            <Select
                onChange={(event) => handleChange(name, event.target.value)}
                value={value}
                label="param"
                required
                color="success"
                sx={{color: 'white'}}
            >
                <MenuItem value={"@c.us"}>@c.us</MenuItem>
                <MenuItem value={"@g.us"}>@g.us</MenuItem>
            </Select>
        </FormControl>
    )
}