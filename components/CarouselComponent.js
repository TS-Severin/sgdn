'use client';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselComponent({ images }) {
    console.log(images);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Carousel

                /*
         disableSwipeOnMobile
         disableDrag
         */
                responsive={responsive}
                ssr
                showDots
                minimumTouchDrag={80}
                slidesToSlide={1}

                partialVisbile={true}
                //infinite={true}
                containerClass="container-with-dots"
                itemClass="image-item"

                rewind={true}


            >


                {images.map((image, index) => (
                    <div><img key={index} src={image.url} alt={`Foto ${index + 1}`} className="w-full h-auto mb-2 mx-2" /></div>
                ))}





            </Carousel>
        </>

    );



}

