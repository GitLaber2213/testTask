import React from "react";
import style from './message-sender.module.css'
import { TextField } from "@mui/material";
import { MakeIconButton } from "../../../../shared";
import { useHandlersMessageSender } from "../../hook/use-handlers-message-sender";



export const MessageSender = () => {
    const { handleKeyDown, handleSendMessage, handleChange, messageSenderText } = useHandlersMessageSender()

    return (
        <div className={style.messageSender}>
            <TextField
                placeholder="Enter message..."
                multiline
                value={messageSenderText}
                onChange={(event) => handleChange(event)}
                onKeyDown={handleKeyDown}
                maxRows={2}
                color="success"
                fullWidth
                InputProps={{
                    endAdornment: <MakeIconButton handleClick={handleSendMessage} text={messageSenderText} />,
                    sx: {
                        color: 'white',
                        border: 'none',
                        backgroundColor: 'rgb(39, 158, 69)',
                        height: '100%',
                        boxSizing: 'border-box'
                    }
                }}
            />
        </div>
    )
}

