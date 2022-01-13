import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Gallery from "react-photo-gallery";
import Masonry from 'react-masonry-css'
import { useSiteContext } from '../../context/use-site'
import CoverImage from "../post-components/cover-image";

export default function ImageGallery({ children }) {
    const siteSettings = useSiteContext();

    const breakpointColumnsObj = {
        default: 4,
        1280: 3,
        1024: 2,
        640: 1
    };

    return (
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -left-30 w-auto"
                columnClassName="pl-30 bg-clip-padding">
                {children}
            </Masonry>


    )
}

