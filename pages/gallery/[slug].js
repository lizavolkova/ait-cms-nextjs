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
    const [showMainGalleryModal, setShowMainGalleryModal] = useState(false);
    const [showConstructionGalleryModal, setShowConstructionGalleryModal] = useState(false);

    const swiperMainClass = 'swiper-main';
    const swiperConstructionClass = 'swiper-construction';

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

    if (!costume) {
        return null
    }

    const { date, title, costumeInfo: { sourceMaterial, images, constructionImages, description, constructionNotes } } = costume;

    return (
        <>
            {/*<ModalGallery showModal={showMainGalleryModal} closeModal={closeMainModal} photos={photos} swiperClass={swiperMainClass}/>*/}
            {/*<ModalGallery showModal={showConstructionGalleryModal} closeModal={closeConstructionModal} photos={photosCons} swiperClass={swiperConstructionClass}/>*/}

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
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>

                        <hr />
                        <h1 className="text-center">Construction Notes</h1>
                        <div dangerouslySetInnerHTML={{ __html: constructionNotes }}></div>
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

    return {
        paths: allCostumes.nodes.map((node) => `/gallery/${node.slug}`) || [],
        fallback: true,
    }
}
