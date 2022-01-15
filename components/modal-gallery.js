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
            <div className="w-full h-full modal-gallery">
                <Swiper
                    navigation={true}
                    loop={true}
                    autoHeight={true}
                    className={swiperClass}>
                    {photos.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="relative max-w-4xl ml-auto mr-auto">
                                    <img className="w-full " src={image.sourceUrl} />
                                    {image.caption && <div className="absolute bottom-0 left-0 text-white w-full bg-halfBlack pl-4 pr-4" dangerouslySetInnerHTML={{ __html: image.caption }}></div>}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Modal>
    )
}

