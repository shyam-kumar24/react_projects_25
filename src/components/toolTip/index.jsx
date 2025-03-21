import { useState } from "react";


export default function ToolTip({children, delay, content}){
    let timeOut ;
    const [isVisible, setIsVisible] = useState(false)

    function handleShowToolTip(){
        timeOut = setTimeout(() => {
            setIsVisible(true)
        },delay || 500)
    }

    function handleHideToolTip(){
        clearTimeout(timeOut)
        setIsVisible(false)
    }

    return (
        <div
        className="tooltip-container"
        onMouseEnter={handleShowToolTip}
        onMouseLeave={handleHideToolTip}
        >
            {children}
            { isVisible ? <div className="tooltip">{content}</div> : null }
        </div>
    )
}