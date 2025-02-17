import { configureStore } from '@reduxjs/toolkit'
import { FormSlice } from '../../features/form/model/form.slice'


export const store = configureStore({
    reducer: {
        [FormSlice.name]: FormSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})