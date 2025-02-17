import { useState } from "react"
import { chatApi } from "../api/api"
import { useSelector } from "react-redux"



export const useHandlersMessageSender = () => {
    const [messageSenderText, setMessageSenderText] = useState('')
    const formData = useSelector(state => state.form.formData)

    const handleChange = (event) => {
        setMessageSenderText(event.target.value)
    }

    const handleSendMessage = async () => {
        setMessageSenderText("")
        await chatApi.sendMessage(formData.phoneNumber + formData.phoneNumberParameter, formData.token, formData.id, messageSenderText, formData.apiUrl)
    }

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && messageSenderText.trim().length !== 0) {
            event.preventDefault()
            setMessageSenderText("")
            await chatApi.sendMessage(formData.phoneNumber + formData.phoneNumberParameter, formData.token, formData.id, messageSenderText, formData.apiUrl)
        }
    }

    return { handleChange, handleSendMessage, handleKeyDown, messageSenderText }
}