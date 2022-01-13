import React from "react";

export default function Modal({children, show, onClose}) {
    if (!show) {
        return null
    }

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0  flex items-center justify-center z-30" >
            <div className="bg-halfBlack w-full h-full fixed" onClick={onClose}></div >
            <div className="w-full flex items-center justify-center">
                <div className="absolute top-0 right-0 p-8 cursor-pointer text-white" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {children}
            </div>

        </div>
    )
}
