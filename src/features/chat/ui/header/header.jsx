import React from "react"
import style from "./header.module.css"
import { MakeLoader } from "../../../../shared"
import { Avatar, CardHeader } from "@mui/material"
import { useGetContactInfo } from "../../hook/use-get-contact-info"

export const Header = () => {
    const { contactInfo, loading } = useGetContactInfo()
        

    if (loading) return <MakeLoader />

    return (
        <div className={style.header}>
            <CardHeader
                avatar={<Avatar alt="Avatar" src={contactInfo.avatar} />}
                title={contactInfo.name}
            />
        </div>
    )
}

