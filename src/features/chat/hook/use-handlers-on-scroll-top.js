import { useState } from "react"




export const useHandlersOnScrollTop = () => {
    const [count, setCount] = useState(40)

    const handleScrollTop = () => {
        setCount((prevCount) => prevCount + 40)
    }

    return { handleScrollTop, count}
}