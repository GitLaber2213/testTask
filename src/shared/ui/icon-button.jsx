import React from "react"
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';


export const MakeIconButton = ({ text, handleClick }) => {
    return (
        <Button
            disabled={text ? false : true}
            variant="contained"
            color="success"
            onClick={handleClick}>

            <SendIcon />
        </Button>
    )
}