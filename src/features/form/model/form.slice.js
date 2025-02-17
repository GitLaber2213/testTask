import { createSelector, createSlice } from "@reduxjs/toolkit";



export const FormSlice = createSlice({
    name: "form",
    initialState: {
        searchData: false,
        formData: {
            apiUrl: '',
            id: '',
            token: '',
            phoneNumber: '',
            phoneNumberParameter: ''
        },
    },
    selectors: {
        getFormData: (state) => createSelector(state, (state) => {
            return state.form.formData
        })
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload
        },
        setSearchData: (state, action) => {
            state.searchData = action.payload
        }
    }
})