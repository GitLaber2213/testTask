import React from "react"
import { chatBackground } from "../../../shared"
import style from "./chat.module.css"
import { MessageList } from "./messages/message-list"
import { Header } from "./header/header"
import { MessageSender } from "./message-sender/message-sender"
import { useSelector } from "react-redux"

export const Chat = () => {
    const searchData = useSelector((state) => state.form.searchData)
    
    return (
        <div className={style.container}>
            <div className={style.background} style={{ "--bg-image": `url(${chatBackground})` }}></div>
            {searchData &&
                <>
                    <Header />
                    <MessageList />
                    <MessageSender />
                </>
            }
        </div>
    )
}