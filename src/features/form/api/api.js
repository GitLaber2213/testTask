

export const formApi = {
    checkWhatsApp: async (phoneNumber, id, token, apiUrl) => {
        const response = await fetch(`${apiUrl}/waInstance${id}/checkWhatsapp/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "phoneNumber": phoneNumber
            })
        })
        return response.json()
    }
}