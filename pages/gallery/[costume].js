import React, { useState, useEffect } from 'react';
import {getAllPostsForHome, getAllCostumes, getBlogSettings} from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import {BLOG_DIRECTORY} from "../../lib/constants";
import ImageGallery from '../../components/layout/image-gallery';
import ImageGalleryElement from '../../components/layout/image-gallery-element';
import Link from "next/link";
import CoverImage from "../../components/post-components/cover-image";
import Modal from '../../components/modal';
import ModalGallery from '../../components/modal-gallery';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Index({ preview }) {
    const [showMainGalleryModal, setShowMainGalleryModal] = useState(false);
    const [showConstructionGalleryModal, setShowConstructionGalleryModal] = useState(false);

    const swiperMainClass = 'swiper-main';
    const swiperConstructionClass = 'swiper-construction';

    const photos = [
        {
            "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1496060169243-453fde45943b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwNTEzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1496060169243-453fde45943b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjcwNTEzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1477490209413-bd54a40dea62?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMjk2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1477490209413-bd54a40dea62?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMjk2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        }
    ];

    const photosCons = [
        {
            "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzc5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1478733672327-ce27bc999503?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
            "mediaDetails": {
                "height": 799,
                "width": 600,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=799&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTA2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
                        "height": 799,
                        "width": 600
                    }
                ]
            }
        },
        {
            "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
            "mediaDetails": {
                "height": 599,
                "width": 800,
                "sizes": [
                    {
                        "fileSize": 1234,
                        "sourceUrl": "https://images.unsplash.com/photo-1446750010813-9bcd2524083f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=599&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMTg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
                        "height": 599,
                        "width": 800
                    }
                ]
            }
        }
    ];

    const goToSlide = (swiperClass, index) => {
        const swiper = document.querySelector(`.${swiperClass}`).swiper;
        swiper.slideTo(index + 1, 0);
    }

    const openMainModal = (index) => {
        setShowMainGalleryModal(true);
        goToSlide(swiperMainClass, index);
    }

    const closeMainModal = () => {
        setShowMainGalleryModal(false);
    }

    const openConstructionModal = (index) => {
        setShowConstructionGalleryModal(true);
        goToSlide(swiperConstructionClass, index);
    }

    const closeConstructionModal = () => {
        setShowConstructionGalleryModal(false);
    }

    return (
        <>
            <ModalGallery showModal={showMainGalleryModal} closeModal={closeMainModal} photos={photos} swiperClass={swiperMainClass}/>
            <ModalGallery showModal={showConstructionGalleryModal} closeModal={closeConstructionModal} photos={photosCons} swiperClass={swiperConstructionClass}/>

            <Layout preview={preview}>
                <Container>
                    <div className="prose max-w-none">
                        <h1 className="text-center">Costume Title</h1>
                        <p className="text-center"><b>Year Completed</b>: 2020 | <b>Source Material</b>: Zelda</p>
                        <ImageGallery>
                            {photos.map((photo,i) => {
                                return (
                                    <ImageGalleryElement key={i} onClick={() => openMainModal(i)}>
                                        <CoverImage title="" coverImage={photo} slug="" />
                                    </ImageGalleryElement>
                                )
                            })
                            }
                        </ImageGallery>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque neque lorem, sed suscipit odio pulvinar nec. Nam non lectus ac lectus elementum maximus. Nam lobortis neque in arcu elementum, sed mollis justo congue. Quisque consectetur dictum urna, at aliquam est efficitur in. Aenean sed gravida lacus. Maecenas felis purus, eleifend nec lectus non, lobortis semper tellus. Donec commodo enim quis diam aliquet, vel interdum magna congue. Praesent sollicitudin volutpat est, accumsan hendrerit velit imperdiet at. Etiam id urna ac urna pharetra lacinia sodales ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a condimentum ante. Etiam eget sagittis felis. Donec diam augue, laoreet non ex sit amet, elementum accumsan erat. Quisque egestas lacus dictum diam dictum, et volutpat lorem consequat. Duis sed commodo ex. Morbi ultrices suscipit viverra.</p>

                        <hr />
                        <h1 className="text-center">Construction Notes</h1>
                        <p>Vestibulum tortor enim, molestie vitae gravida et, varius commodo sapien. Donec sed sapien sapien. Sed vulputate eget nunc eget porttitor. Suspendisse mattis mi a metus tristique molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada ac risus sed molestie. Morbi ultrices tempor massa, nec blandit felis faucibus non. Quisque vulputate velit quis libero mollis consectetur eu nec nisi.

                            Phasellus accumsan arcu vel risus accumsan pellentesque. Nunc eu fringilla arcu. Vivamus nec diam justo. Duis ut nunc et lectus pellentesque accumsan sed vel eros. Vestibulum sapien quam, imperdiet ut nibh a, lacinia condimentum libero. Aenean a odio et orci convallis vehicula. Nullam laoreet nisi vitae nisl venenatis auctor id a diam. Aliquam erat volutpat. Praesent cursus auctor erat, vitae tempor mi elementum vitae. Cras blandit convallis urna at accumsan. Curabitur ac magna eu est tempus gravida. Donec sodales ultrices hendrerit. Aliquam faucibus metus ac enim elementum tincidunt. Donec dictum porttitor quam ac lobortis.</p>
                        <ImageGallery>
                            {photosCons.map((photo,i) => {
                                return (
                                    <ImageGalleryElement key={i} onClick={() => openConstructionModal(i)}>
                                        <CoverImage title="" coverImage={photo} slug="" />
                                    </ImageGalleryElement>
                                )
                            })
                            }
                        </ImageGallery>
                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const settings = await getBlogSettings()
    const allPosts = await getAllPostsForHome(preview)

    return {
        props: { allPosts, preview, settings },
    }
}

export async function getStaticPaths() {
    const allCostumes = await getAllCostumes()
    ////paths: allCostumes.nodes.map((node) => `/gallery/${node.slug}`) || [],

    return {
        paths: [
            {  params: { costume: 'outlander' } },
        ],
        fallback: true,
    }
}
