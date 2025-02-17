import React from "react"
import styles from "./styles/app.module.css"
import { MakeForm } from "../features/form/ui/form"
import { Chat } from "../features/chat/ui/chat"



export const App = () => {
    return (
        <div className={styles.container}>
            <MakeForm />
            <Chat />
        </div>
    )
}