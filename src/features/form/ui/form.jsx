import React from "react"
import { MakeInput, MakeLoader, MakeSelect } from "../../../shared"
import styles from "./form.module.css"
import { MakeButton } from "../../../shared"
import { Alert } from "@mui/material"
import { useHandlersForm } from "../hook/use-handlers-form"


export const MakeForm = () => {
    const { handleSubmit, handleChange, formData, searchData, loading, error } = useHandlersForm()

    if (loading) {
        return <MakeLoader />
    }
    

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
            <MakeInput
                    label="apiUrl"
                    name="apiUrl"
                    handleChange={handleChange}
                    value={formData.apiUrl}
                />
                <MakeInput
                    label="id"
                    name="id"
                    handleChange={handleChange}
                    value={formData.id}
                />
                <MakeInput
                    label="token"
                    name="token"
                    handleChange={handleChange}
                    value={formData.token}
                />
                <div className={styles.phoneNumberContainer}>
                    <MakeInput
                        label="phone number"
                        type="number"
                        name="phoneNumber"
                        handleChange={handleChange}
                        value={formData.phoneNumber}

                    />
                    <MakeSelect
                        handleChange={handleChange}
                        name="phoneNumberParameter"
                        value={formData.phoneNumberParameter}
                    />
                </div>
                <div>
                    <MakeButton color={searchData ? "error" : "success"} text={searchData ? "Clear" : "Search"} disabled={loading} />
                </div>
                <div>
                    {error && <Alert severity="error">{error}</Alert>}
                </div>
            </form>
        </div>
    )
}