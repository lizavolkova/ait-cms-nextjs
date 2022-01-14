import React, { useState, useEffect } from 'react';
import {getAllFeaturedCostumes, getCostumeBySlug, getBlogSettings} from '../../lib/api'
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

export default function Index({ costume, preview }) {
    console.log(costume)
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

    const { date, title, costumeInfo: { sourceMaterial, images, constructionImages, description, constructionNotes } } = costume;

    return (
        <>
            <ModalGallery showModal={showMainGalleryModal} closeModal={closeMainModal} photos={photos} swiperClass={swiperMainClass}/>
            <ModalGallery showModal={showConstructionGalleryModal} closeModal={closeConstructionModal} photos={photosCons} swiperClass={swiperConstructionClass}/>

            <Layout preview={preview}>
                <Container>
                    <div className="prose max-w-none">
                        <h1 className="text-center">{title}</h1>
                        <p className="text-center">{date && <><b>Year Completed</b>: {date} |</> } {sourceMaterial && <><b>Source Material</b>: {sourceMaterial}</>}</p>
                        <ImageGallery>
                            {images.map((image,i) => {
                                return (
                                    <ImageGalleryElement key={i} onClick={() => openMainModal(i)}>
                                        <img src={image.sourceUrl} srcSet={image.srcSet} sizes={image.sizes} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                                        {/*<CoverImage title="" coverImage={photo} slug="" />*/}
                                    </ImageGalleryElement>
                                )
                            })
                            }
                        </ImageGallery>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>

                        <hr />
                        <h1 className="text-center">Construction Notes</h1>
                        <p dangerouslySetInnerHTML={{ __html: constructionNotes }}></p>
                        <ImageGallery>
                            {constructionImages.map((image,i) => {
                                return (
                                    <ImageGalleryElement key={i} onClick={() => openConstructionModal(i)}>
                                        <img src={image.sourceUrl} srcSet={image.srcSet} sizes={image.sizes} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                                        {/*<CoverImage title="" coverImage={photo} slug="" />*/}
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

export async function getStaticProps({ params, preview = false }) {
    const settings = await getBlogSettings()
    const costume = await getCostumeBySlug(params.slug)

    return {
        props: { costume, preview, settings },
    }
}

export async function getStaticPaths() {
    const allCostumes = await getAllFeaturedCostumes()
    ////paths: allCostumes.nodes.map((node) => `/gallery/${node.slug}`) || [],

    return {
        paths: allCostumes.nodes.map((node) => `/gallery/${node.slug}`) || [],
        fallback: true,
    }
}
