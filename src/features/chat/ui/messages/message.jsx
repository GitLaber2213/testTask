import React from "react"
import styles from './message.module.css'

export const Message = ({ myMessage, text, timestamp, status }) => {

    return (
        <div className={styles.messageContainer}>
            <div className={myMessage ? styles.messageUnContainer + ' ' + styles.active : styles.messageUnContainer + ' ' + styles.disable}>
                <div className={styles.message}>
                    {text}
                </div>

                <div className={styles.messageInfo}>
                    <div className={styles.timeStamp}>
                        {String(timestamp.getHours()).padStart(2, '0') + ':' + String(timestamp.getMinutes()).padStart(2, '0')}
                    </div>
                    {myMessage && (
                        <div className={status === "read" ? styles.checkMarks + ' ' + styles.readed : styles.checkMarks}>
                            ✓{status === "sent" || status === "delivered" || status === "read" ? '✓' : ''}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}