import { Button } from "@mui/material"
import React from "react"


export const MakeButton = ({ text, handleClick, disabled = false, color="success" }) => {
    return (
        <Button disabled={disabled} variant="contained" fullWidth color={color} onClick={handleClick} type="submit">{text}</Button>
    )
}