import { useEffect, useState } from "react"
import { chatApi } from "../api/api"
import { useSelector } from "react-redux"



export const useGetContactInfo = () => {
    const formData = useSelector((state) => state.form.formData)
    const searchData = useSelector((state) => state.form.searchData)
    
    const [contactInfo, setContactInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(searchData) {
            setLoading(true)
            chatApi.getContactInfo(formData.phoneNumber + formData.phoneNumberParameter, formData.token, formData.id, formData.apiUrl)
            .then(res => setContactInfo(res))
            .finally(() => setLoading(false))
        }
    }, [searchData])

    return { contactInfo, loading }
}
