import React from "react";
import Modal from "./modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function ModalGallery({showModal, closeModal, photos, swiperClass}) {

    return (
        <Modal show={showModal} onClose={closeModal} >
            <div className="w-full">
                <Swiper navigation={true} loop={true} autoHeight={true} className={swiperClass}>
                    {photos.map((photo, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img className="ml-auto mr-auto" src={photo.sourceUrl} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Modal>
    )
}

