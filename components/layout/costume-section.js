import React, { useState, useEffect } from 'react';
import ImageGallery from "./image-gallery";
import ImageGalleryElement from "./image-gallery-element";
import ModalGallery from "../modal-gallery";

export default function CostumeSection({ description, images }) {
    const [showModal, setShowModal] = useState(false);
    const swiperClass = 'main-swiper-class';

    const openModal = (index) => {
        console.log('show modal!')
        setShowModal(true);
        goToSlide(swiperClass, index);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const goToSlide = (swiperClass, index) => {
        const swiper = document.querySelector(`.${swiperClass}`).swiper;
        swiper.slideTo(index + 1, 0);
    }

    return (
       <>
           {images?.length > 0 && <ModalGallery showModal={showModal} closeModal={closeModal} photos={images} swiperClass={swiperClass}/>}

           {description?.length > 0 &&
            <>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </>
           }

           {images?.length > 0 &&
               <ImageGallery>
                   {images.map((image, i) => {
                       return (
                           <ImageGalleryElement key={i} onClick={() => openModal(i)}>
                               <img src={image.sourceUrl} srcSet={image.srcSet} sizes={image.sizes}
                                    width={image.mediaDetails?.width} height={image.mediaDetails?.height}/>
                               {/*<CoverImage title="" coverImage={photo} slug="" />*/}
                           </ImageGalleryElement>
                       )
                   })
                   }
               </ImageGallery>
           }




       </>
    )
}