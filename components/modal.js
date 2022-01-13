import React from "react";
import cn from "classnames";

export default function Modal({children, show, onClose, onOpenCallback}) {

    if (typeof document !== 'undefined' && !show) {
        document.body.style.overflow = 'visible';
    }

    if (typeof document !== 'undefined' && show) {
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className={cn(
            'fixed left-0 top-0 right-0 bottom-0  flex items-center justify-center ',
            show ? 'opacity-100 z-30' : 'opacity-0 z-0')}>
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

