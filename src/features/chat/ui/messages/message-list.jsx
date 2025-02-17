import React from "react"
import { Message } from "./message"
import styles from "./message.module.css"
import { MakeLoader, MakeScrollBar } from "../../../../shared"
import { useHandlersOnScrollTop } from "../../hook/use-handlers-on-scroll-top"
import { useGetMessages } from "../../hook/use-get-messages"




export const MessageList = () => {
    const { handleScrollTop, count } = useHandlersOnScrollTop()
    const { loading, data:messages } = useGetMessages(count)

    if (loading) {
        return <MakeLoader />
    }
    return (
        <MakeScrollBar onScrollTop={handleScrollTop}>
            <div className={styles.messageListContainer}>
                {messages.length > 0 ? messages.slice().reverse().map((message) => (message.typeMessage === "textMessage" || message.typeMessage === "extendedTextMessage") && <Message
                    key={message.idMessage}
                    text={message.textMessage}
                    myMessage={message.type === "outgoing" ? true : false}
                    timestamp={new Date(message.timestamp * 1000)}
                    status={message.statusMessage}
                />) : ``}
            </div>
        </MakeScrollBar>
    )
}