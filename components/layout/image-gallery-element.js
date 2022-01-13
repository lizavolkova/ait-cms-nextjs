import React from "react";

export default function ImageGalleryElement({children}) {
    return (
        <li className="list-none m-4 mb-8 relative group cursor-pointer">
            {children}
        </li>
    )
}