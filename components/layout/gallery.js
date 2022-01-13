import Link from 'next/link'
import Image from 'next/image'
import Gallery from "react-photo-gallery";
import Masonry from 'react-masonry-css'
import { useSiteContext } from '../../context/use-site'
import CoverImage from "../post-components/cover-image";

export default function ImageGallery({ element }) {
    const siteSettings = useSiteContext();

    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 800,
            height: 799
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 600,
            height: 799
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 600,
            height: 799
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 600,
            height: 799
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 600,
            height: 799
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            width: 600,
            height: 799
        },
        {
            src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
            width: 4927,
            height: 1000
        },
        {
            src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
            width: 800,
            height: 599
        },
        {
            src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
            width: 600,
            height: 400
        },
        {
            src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
            width: 800,
            height: 533
        },
        {
            src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
            width: 740,
            height: 494
        }
    ];

    const test = photos.map(photo => {
        return {
            sourceUrl: photo.src,
            mediaDetails: {
                height: photo.height,
                width: photo.width,
                sizes: [
                    {
                        fileSize: 1234,
                        sourceUrl: photo.src,
                        height: photo.height,
                        width: photo.width,
                    }
                ]
            }
        }
    })

    const breakpointColumnsObj = {
        default: 4,
        1280: 3,
        1024: 2,
        640: 1
    };

    return (
        <div className="prose max-w-none">
            <h1 className="text-center font-cormorant">Costume Gallery</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -left-30 w-auto"
                columnClassName="pl-30 bg-clip-padding">
                {test.map((photo,i) => {
                        return (
                            <li className="list-none m-4 mb-8 relative group" key={i}>
                                <a href="/gallery/outlander">
                                    <div className="absolute w-full h-full bg-black z-10 pb=4 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                                    <div className="absolute transition-opacity duration-300 inset-x-0 bottom-0 z-30 opacity-100 group-hover:opacity-100 lg:opacity-0">
                                        <h4 className="font-sans text-white m-8 font-bold">TEXT</h4>
                                    </div>
                                    <CoverImage title="" coverImage={photo} slug="" />
                                     {/*<Image className="relative z-20" src={photo.sourceUrl} width={photo.mediaDetails.width} height={photo.mediaDetails.height} alt=""/>*/}

                                </a>
                            </li>
                        )
                    })
                }
            </Masonry>
        </div>

    )
}
