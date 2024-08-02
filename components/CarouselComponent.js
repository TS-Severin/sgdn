'use client';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import LightboxComponent from './LightboxComponent';



const CarouselComponent = ({ images }) => {
    const [isClient, setIsClient] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);


    useEffect(() => {
        setIsClient(true);
    }, []);

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: { max: 1200, min: 464 },
            items: 2,
            partialVisibilityGutter: 100,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };

    return (
        <>
            <LightboxComponent open={open} images={images} handleClose={handleClose} />
            <div className="container mx-auto w-full overflow-hidden pb-4">



                {isClient && (
                    <Carousel
                        responsive={responsive}
                        ssr
                        minimumTouchDrag={80}
                        slidesToSlide={1}
                        infinite={true}
                        partialVisible={true}
                        centerMode={false}
                        containerClass="carousel-container"
                        itemClass="carousel-image"
                        rewind={true}
                        arrows={true}
                        customLeftArrow={<FaArrowLeft className="absolute text-white left-[2%] cursor-pointer hover:text-green" />}
                        customRightArrow={<FaArrowRight className="absolute text-white right-[2%] cursor-pointer hover:text-green" />}


                    >
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center w-full" >
                                <Image
                                    src={image.url}
                                    alt={`Lesungsfoto ${index + 1}`}
                                    width={400}
                                    height={300}
                                    priority={true}
                                    className="object-contain w-auto pl-1"
                                    onClick={() => setOpen(true)}
                                />
                            </div>

                        ))}
                    </Carousel>
                )
                }
            </div >
        </>
    );
};

export default CarouselComponent;


