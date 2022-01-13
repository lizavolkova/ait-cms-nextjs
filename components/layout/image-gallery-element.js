import React from "react";

export default function ImageGalleryElement({children, onClick}) {
    return (
        <li className="list-none m-4 mb-8 relative group cursor-pointer" onClick={onClick}>
            {children}
        </li>
    )
}