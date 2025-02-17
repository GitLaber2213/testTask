import React from "react"
import { CircularProgress } from "@mui/material"
import style from './loader.module.css'


export const MakeLoader = () => {
    return (
        <div className={style.container}>

            <CircularProgress color="success" sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
        </div>
    )
}