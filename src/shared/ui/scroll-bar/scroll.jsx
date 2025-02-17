import React, { useEffect, useRef, useState } from 'react'
import style from './scroll.module.css'


export const MakeScrollBar = ({ children, onScrollTop }) => {
    const ref = useRef(null)
    const [initialScrollDone, setInitialScrollDone] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        if (ref.current.scrollTop === 0) {
          onScrollTop()
        }
      }
  
      const scrollContainer = ref.current
      scrollContainer.addEventListener('scroll', handleScroll)
  
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }, [onScrollTop]);
  
    useEffect(() => {
      if (!initialScrollDone) {
        const { scrollHeight, clientHeight } = ref.current
  
        if (ref.current && scrollHeight > clientHeight) {
          ref.current.scrollTop = ref.current.scrollHeight
          setInitialScrollDone(true)
        }
      }
    }, [children, initialScrollDone])


    return (
        <div ref={ref} className={style.scrollBar}>
            {children}
        </div>
    )
}