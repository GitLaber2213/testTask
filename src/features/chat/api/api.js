


export const chatApi = {
    getContactInfo: async (chatId, token, id, apiUrl) => {
        const responce = await fetch(`${apiUrl}/waInstance${id}/getContactInfo/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "chatId": chatId
            })
        })
        return responce.json()
    },
    getChatHistory: async (chatId, token, id, count, apiUrl) => {
        const responce = await fetch(`${apiUrl}/waInstance${id}/getChatHistory/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "chatId": chatId,
                "count": count
            })
        })
        if(responce) {
            return responce.json()
        }
    },
    getNotifications: async (token, id, setNotifications, apiUrl) => {
        const responce = await fetch(`${apiUrl}/waInstance${id}/receiveNotification/${token}?receiveTimeout=60`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await responce.json()
        if (data && data.typeWebhook !== "outgoingMessageStatus") {
            setNotifications(prevMessages => [...prevMessages, data.body])
            await fetch(`${apiUrl}/waInstance${id}/deleteNotification/${token}/${data.receiptId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
    },
    sendMessage: async (chatId, token, id, message, apiUrl) => {
        const responce = await fetch(`${apiUrl}/waInstance${id}/sendMessage/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "chatId": chatId,
                "message": message,
                "linkPreview": false
            })
        })

        return responce.json()
    }
}