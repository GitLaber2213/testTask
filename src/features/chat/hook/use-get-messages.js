import { useEffect, useState } from "react"
import { chatApi } from "../api/api"
import { useSelector } from "react-redux"




export const useGetMessages = (messagesCount) => {
    const [data, setData] = useState([])
    const [notifications, setNotifications] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const formData = useSelector((state) => state.form.formData)
    const searchData = useSelector((state) => state.form.searchData)


    if (searchData) {
        useEffect(() => {
            chatApi.getChatHistory(formData.phoneNumber + formData.phoneNumberParameter, formData.token, formData.id, messagesCount, formData.apiUrl)
                .then(res => setData(res))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
            console.log(data)
        }, [notifications, messagesCount])

        useEffect(() => {
            const fetchMessages = async () => {
                chatApi.getNotifications(formData.token, formData.id, setNotifications, formData.apiUrl).catch(err => setError(err))
            }

            fetchMessages();
            const intervalId = setInterval(fetchMessages, 60000);

            return () => clearInterval(intervalId);
        }, [notifications]);
    }
    return { data, loading, error }
}