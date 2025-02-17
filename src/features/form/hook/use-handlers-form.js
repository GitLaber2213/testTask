import { useState } from "react";
import { ERROR_MESSAGES } from "../../../shared";
import { formApi } from "../api/api"
import { useDispatch, useSelector } from "react-redux";
import { FormSlice } from "../model/form.slice";




export const useHandlersForm = () => {
    const dispatch = useDispatch()

    const formData = useSelector((state) => state.form.formData)
    const searchData = useSelector((state) => state.form.searchData)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const response = await formApi.checkWhatsApp(formData.phoneNumber, formData.id, formData.token, formData.apiUrl);

            if (!response.existsWhatsapp) {
                setError(ERROR_MESSAGES.CHECK_WHATSAPP)
                return
            }
        } catch (error) {
            setError(ERROR_MESSAGES.CHECK_WHATSAPP_ERROR)
        }
        finally {
            setLoading(false)
        }

        if(searchData) {
            dispatch(FormSlice.actions.setSearchData(false))
            dispatch(FormSlice.actions.setFormData({ id: '', token: '', phoneNumber: '', phoneNumberParameter: '', apiUrl: '' }))
        } else {
            dispatch(FormSlice.actions.setSearchData(true))
        }
    }

    const handleChange = (field, value) => {
        dispatch(FormSlice.actions.setSearchData(false))
        dispatch(FormSlice.actions.setFormData({ ...formData, [field]: value }))
    }


    return { handleSubmit, handleChange, formData, searchData, loading, error }
}